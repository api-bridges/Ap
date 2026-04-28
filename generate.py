#!/usr/bin/env python3
"""
Render a neon glass cube grid matching the reference image.
Output: output.png  (1536 × 1024)

Camera at 45° diagonal so the 9×9 grid appears as a diamond.
Three special cubes glow in bright green, magenta, cyan.
All cubes rendered as glass with faint back edges.
"""

from PIL import Image, ImageDraw, ImageFilter
import numpy as np
import math

W, H = 1536, 1024

# ── Camera ────────────────────────────────────────────────────────────────────
COLS, ROWS = 9, 9
CX, CY = COLS / 2.0, ROWS / 2.0

D_HORIZ = 11.0
Z_CAM   = 5.2
FOV     = 43.0

EYE    = np.array([CX - D_HORIZ * 0.707,
                   CY - D_HORIZ * 0.707,
                   Z_CAM])
TARGET = np.array([CX, CY, 0.45])


def lookat(e, t, up=np.array([0., 0., 1.])):
    f = t - e;  f /= np.linalg.norm(f)
    r = np.cross(f, up); r /= np.linalg.norm(r)
    u = np.cross(r, f)
    return np.array([[r[0], r[1], r[2], -r @ e],
                     [u[0], u[1], u[2], -u @ e],
                     [-f[0], -f[1], -f[2], f @ e],
                     [0, 0, 0, 1]], dtype=float)


def persp(fov_deg, ar, near=0.1, far=600.0):
    s = 1.0 / math.tan(math.radians(fov_deg / 2))
    return np.array([[s / ar, 0, 0, 0],
                     [0, s, 0, 0],
                     [0, 0, (far + near) / (near - far),
                             2 * far * near / (near - far)],
                     [0, 0, -1, 0]], dtype=float)


MVP = persp(FOV, W / H) @ lookat(EYE, TARGET)


def project(pt):
    c = MVP @ np.array([pt[0], pt[1], pt[2], 1.0])
    if c[3] <= 0:
        return None
    n = c / c[3]
    return (int((n[0] + 1) * 0.5 * W),
            int((1 - n[1]) * 0.5 * H))


# ── Scene ─────────────────────────────────────────────────────────────────────
CUBE_SCALE = 0.84
CUBE_H     = 1.0

# 45° camera: c-r drives screen-left/right, c+r drives depth (up=far, down=near)
# Reference cube positions:
#   Magenta → back-center:       (4,6) c+r=10  c-r=-2
#   Green   → middle-left:       (2,4) c+r= 6  c-r=-2
#   Cyan    → center-right back: (6,4) c+r=10  c-r=+2
SPECIAL = {
    (4, 6): 'magenta',
    (2, 4): 'green',
    (6, 4): 'cyan',
}

CUBE_EDGES = [
    (0,1),(1,2),(2,3),(3,0),
    (4,5),(5,6),(6,7),(7,4),
    (0,4),(1,5),(2,6),(3,7),
]

CUBE_FACES = [
    ([4,5,6,7], np.array([ 0., 0., 1.])),
    ([0,1,5,4], np.array([ 0.,-1., 0.])),
    ([3,2,6,7], np.array([ 0., 1., 0.])),
    ([0,3,7,4], np.array([-1., 0., 0.])),
    ([1,2,6,5], np.array([ 1., 0., 0.])),
]

LIGHT = np.array([0.5, -0.3, 0.8])
LIGHT /= np.linalg.norm(LIGHT)

STYLES = {
    'default': dict(
        fb=(5, 3, 30),  fa=45,
        # Bright purple-blue neon edges
        ec=(90, 60, 240), gc=(55, 30, 175),
        ew=1, gw=6, br=4, gs=0.55,
    ),
    'green': dict(
        fb=(3, 35, 3),  fa=150,
        ec=(55, 255, 55), gc=(22, 210, 22),
        ew=2, gw=16, br=11, gs=1.5,
    ),
    'magenta': dict(
        fb=(35, 3, 18), fa=150,
        ec=(255, 40, 205), gc=(205, 15, 158),
        ew=2, gw=16, br=11, gs=1.5,
    ),
    'cyan': dict(
        fb=(3, 18, 35), fa=150,
        ec=(40, 225, 255), gc=(15, 178, 225),
        ew=2, gw=16, br=11, gs=1.5,
    ),
}


def cube_verts(c, r):
    pad = (1.0 - CUBE_SCALE) / 2.0
    x0, x1 = c + pad, c + 1 - pad
    y0, y1 = r + pad, r + 1 - pad
    return [
        (x0,y0,0),(x1,y0,0),(x1,y1,0),(x0,y1,0),
        (x0,y0,CUBE_H),(x1,y0,CUBE_H),(x1,y1,CUBE_H),(x0,y1,CUBE_H),
    ]


def render():
    # ── Background: very dark, subtle navy gradient ─────────────────────
    bg = np.zeros((H, W, 3), dtype=np.uint8)
    for y in range(H):
        t = y / H
        bg[y] = (int(1 + t*5), int(2 + t*9), int(7 + t*32))

    face_img  = Image.new('RGBA', (W,H), (0,0,0,0))
    fdraw     = ImageDraw.Draw(face_img)
    edge_img  = Image.new('RGB',  (W,H), (0,0,0))
    edraw     = ImageDraw.Draw(edge_img)
    back_img  = Image.new('RGB',  (W,H), (0,0,0))  # faint back edges
    bdraw     = ImageDraw.Draw(back_img)

    glow_imgs = {k: Image.new('RGB',(W,H),(0,0,0)) for k in STYLES}
    gdraws    = {k: ImageDraw.Draw(glow_imgs[k]) for k in STYLES}

    # ── Floor grid (extends 6 units beyond cube area) ─────────────────
    ext = 6
    for gx in range(-ext, COLS+ext+1):
        a = project((gx,-ext,0)); b = project((gx,ROWS+ext,0))
        if a and b: edraw.line([a,b], fill=(10,24,66), width=1)
    for gy in range(-ext, ROWS+ext+1):
        a = project((-ext,gy,0)); b = project((COLS+ext,gy,0))
        if a and b: edraw.line([a,b], fill=(10,24,66), width=1)

    # ── Sort far → near (painter's algorithm) ─────────────────────────
    order = sorted(
        ((c,r) for r in range(ROWS) for c in range(COLS)),
        key=lambda cr: -float(
            np.linalg.norm(EYE - np.array([cr[0]+.5, cr[1]+.5, CUBE_H/2])))
    )

    for c, r in order:
        v3 = cube_verts(c, r)
        vs = [project(v) for v in v3]
        if any(v is None for v in vs):
            continue

        stype = SPECIAL.get((c,r), 'default')
        st    = STYLES[stype]
        gd    = gdraws[stype]

        # Faint back edges for glass look (draw ALL edges very dim first)
        dim = tuple(max(0, int(x * 0.14)) for x in st['gc'])
        for a, b in CUBE_EDGES:
            if vs[a] and vs[b]:
                bdraw.line([vs[a], vs[b]], fill=dim, width=1)

        # Visible faces (backface-culled)
        for idx, norm in CUBE_FACES:
            fv = np.array(v3[idx[0]])
            if float(np.dot(norm, EYE - fv)) <= 0:
                continue
            shade = 0.2 + 0.8 * max(0.0, float(np.dot(norm, LIGHT)))
            if norm[2] > 0.5: shade = min(1.0, shade * 1.1)
            fb = st['fb']
            fc = tuple(min(255, int(fb[i]*(0.55 + shade*0.90))) for i in range(3))
            fdraw.polygon([vs[i] for i in idx], fill=(*fc, st['fa']))

        # Front edges: glow layer + sharp layer
        for a, b in CUBE_EDGES:
            if vs[a] and vs[b]:
                gd.line([vs[a], vs[b]], fill=st['gc'], width=st['gw'])
                edraw.line([vs[a], vs[b]], fill=st['ec'], width=st['ew'])

    # ── Composite ─────────────────────────────────────────────────────
    base = np.array(Image.fromarray(bg), dtype=float)

    # Layer 1: faint back edges (glass transparency)
    bk = np.array(back_img.filter(ImageFilter.GaussianBlur(1.5)), dtype=float)
    base = np.clip(base + bk * 0.18, 0, 255)

    # Layer 2: multi-radius bloom per style
    for stype, gimg in glow_imgs.items():
        st = STYLES[stype]
        br, gs = st['br'], st['gs']
        g1 = np.array(gimg.filter(ImageFilter.GaussianBlur(br)),       dtype=float)
        g2 = np.array(gimg.filter(ImageFilter.GaussianBlur(br*2.5)),   dtype=float)
        g3 = np.array(gimg.filter(ImageFilter.GaussianBlur(br*6.0)),   dtype=float)
        base = np.clip(base + g1*gs + g2*(gs*0.38) + g3*(gs*0.13), 0, 255)

    # Layer 3: transparent cube faces
    out = Image.fromarray(base.astype(np.uint8)).convert('RGBA')
    out = Image.alpha_composite(out, face_img)
    out = out.convert('RGB')

    # Layer 4: sharp neon edges on top
    ea  = np.array(edge_img, dtype=float)
    out = np.clip(np.array(out, dtype=float) + ea, 0, 255)

    Image.fromarray(out.astype(np.uint8)).save('/home/runner/work/Ap/Ap/output.png')
    print("Saved output.png")


render()
