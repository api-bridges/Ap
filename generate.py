#!/usr/bin/env python3
"""
Render a neon glass cube grid matching the reference image.
Output: output.png  (1536 × 1024)
"""

from PIL import Image, ImageDraw, ImageFilter
import numpy as np
import math

W, H = 1536, 1024

# ── Camera ────────────────────────────────────────────────────────────────────
# 9×9 grid, 45° diagonal view so grid appears as diamond.
# Camera from front-left corner; (0,0) = bottom, (8,8) = back-top.
COLS, ROWS = 9, 9
CX, CY = COLS / 2.0, ROWS / 2.0

D_HORIZ = 11.5   # horizontal distance along 45° diagonal
Z_CAM   = 4.8    # height  → elevation ≈ 22° (shows clear side-faces)
FOV     = 44.0

EYE    = np.array([CX - D_HORIZ * 0.707,
                   CY - D_HORIZ * 0.707,
                   Z_CAM])
TARGET = np.array([CX, CY, 0.5])


def lookat(e, t, up=np.array([0., 0., 1.])):
    f = t - e;  f /= np.linalg.norm(f)
    r = np.cross(f, up); r /= np.linalg.norm(r)
    u = np.cross(r, f)
    return np.array([[r[0], r[1], r[2], -r @ e],
                     [u[0], u[1], u[2], -u @ e],
                     [-f[0], -f[1], -f[2], f @ e],
                     [0, 0, 0, 1]], dtype=float)


def persp(fov_deg, ar, near=0.1, far=500.0):
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
CUBE_H     = 1.05   # slightly taller → visible side-faces

# 45° camera mapping:
#   screen-right  ↔  col - row  (c > r → right)
#   screen-up     ↔  col + row  (large sum → far back/top)
#
# Reference positions (from visual analysis):
#   Magenta → back, upper-center:        c+r ≈ 11, c-r ≈ -2  → (4, 7)
#   Green   → middle-left, closer:       c+r ≈ 5,  c-r ≈ -2  → (1, 3) slightly forward-left
#   Cyan    → center-right, middle-back: c+r ≈ 9,  c-r ≈ +2  → (5, 4) ← wait...
#
# After careful visual check:
#   Magenta: back upper  → (4, 6) c+r=10, c-r=-2
#   Green:   left middle → (1, 4) c+r=5,  c-r=-3   (left side, moderate depth)
#   Cyan:    center+right upper → (6, 4) c+r=10, c-r=+2
SPECIAL = {
    (4, 6): 'magenta',
    (1, 4): 'green',
    (6, 4): 'cyan',
}

CUBE_EDGES = [
    (0, 1), (1, 2), (2, 3), (3, 0),
    (4, 5), (5, 6), (6, 7), (7, 4),
    (0, 4), (1, 5), (2, 6), (3, 7),
]

CUBE_FACES = [
    ([4, 5, 6, 7], np.array([ 0.,  0.,  1.])),
    ([0, 1, 5, 4], np.array([ 0., -1.,  0.])),
    ([3, 2, 6, 7], np.array([ 0.,  1.,  0.])),
    ([0, 3, 7, 4], np.array([-1.,  0.,  0.])),
    ([1, 2, 6, 5], np.array([ 1.,  0.,  0.])),
]

LIGHT = np.array([0.5, -0.3, 0.8])
LIGHT /= np.linalg.norm(LIGHT)

STYLES = {
    'default': dict(
        fb=(6, 4, 34),  fa=55,
        ec=(82, 56, 225), gc=(54, 33, 170),
        ew=1, gw=6,  br=4,  gs=0.5,
    ),
    'green': dict(
        fb=(5, 32, 5),  fa=160,
        ec=(50, 255, 50), gc=(25, 200, 25),
        ew=2, gw=14, br=9, gs=1.4,
    ),
    'magenta': dict(
        fb=(32, 4, 18), fa=160,
        ec=(255, 45, 200), gc=(200, 20, 155),
        ew=2, gw=14, br=9, gs=1.4,
    ),
    'cyan': dict(
        fb=(4, 18, 32), fa=160,
        ec=(45, 220, 255), gc=(20, 175, 220),
        ew=2, gw=14, br=9, gs=1.4,
    ),
}


def cube_verts(c, r):
    pad = (1.0 - CUBE_SCALE) / 2.0
    x0, x1 = c + pad, c + 1 - pad
    y0, y1 = r + pad, r + 1 - pad
    return [
        (x0, y0, 0),       (x1, y0, 0),       (x1, y1, 0),       (x0, y1, 0),
        (x0, y0, CUBE_H),  (x1, y0, CUBE_H),  (x1, y1, CUBE_H),  (x0, y1, CUBE_H),
    ]


def render():
    bg = np.zeros((H, W, 3), dtype=np.uint8)
    for y in range(H):
        t = y / H
        bg[y] = (int(2 + t * 4), int(3 + t * 7), int(10 + t * 28))

    face_img = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    fdraw    = ImageDraw.Draw(face_img)
    edge_img = Image.new('RGB',  (W, H), (0, 0, 0))
    edraw    = ImageDraw.Draw(edge_img)

    glow_imgs = {k: Image.new('RGB', (W, H), (0, 0, 0)) for k in STYLES}
    gdraws    = {k: ImageDraw.Draw(glow_imgs[k]) for k in STYLES}

    # Floor grid
    ext = 5
    for gx in range(-ext, COLS + ext + 1):
        a = project((gx, -ext, 0));  b = project((gx, ROWS + ext, 0))
        if a and b: edraw.line([a, b], fill=(10, 22, 60), width=1)
    for gy in range(-ext, ROWS + ext + 1):
        a = project((-ext, gy, 0));  b = project((COLS + ext, gy, 0))
        if a and b: edraw.line([a, b], fill=(10, 22, 60), width=1)

    # Sort far → near
    order = sorted(
        ((c, r) for r in range(ROWS) for c in range(COLS)),
        key=lambda cr: -float(
            np.linalg.norm(EYE - np.array([cr[0]+.5, cr[1]+.5, CUBE_H/2])))
    )

    for c, r in order:
        v3 = cube_verts(c, r)
        vs = [project(v) for v in v3]
        if any(v is None for v in vs):
            continue

        stype = SPECIAL.get((c, r), 'default')
        st    = STYLES[stype]
        gd    = gdraws[stype]

        for idx, norm in CUBE_FACES:
            fv = np.array(v3[idx[0]])
            if float(np.dot(norm, EYE - fv)) <= 0:
                continue
            shade = 0.2 + 0.8 * max(0.0, float(np.dot(norm, LIGHT)))
            if norm[2] > 0.5: shade = min(1.0, shade * 1.1)
            fb = st['fb']
            fc = tuple(min(255, int(fb[i] * (0.5 + shade))) for i in range(3))
            fdraw.polygon([vs[i] for i in idx], fill=(*fc, st['fa']))

        for a, b in CUBE_EDGES:
            if vs[a] and vs[b]:
                gd.line([vs[a], vs[b]], fill=st['gc'], width=st['gw'])
                edraw.line([vs[a], vs[b]], fill=st['ec'], width=st['ew'])

    # Composite
    base = np.array(Image.fromarray(bg), dtype=float)
    for stype, gimg in glow_imgs.items():
        st = STYLES[stype]
        br, gs = st['br'], st['gs']
        g1 = np.array(gimg.filter(ImageFilter.GaussianBlur(br)),       dtype=float)
        g2 = np.array(gimg.filter(ImageFilter.GaussianBlur(br * 2.5)), dtype=float)
        g3 = np.array(gimg.filter(ImageFilter.GaussianBlur(br * 5.0)), dtype=float)
        base = np.clip(base + g1*gs + g2*(gs*0.4) + g3*(gs*0.15), 0, 255)

    out = Image.fromarray(base.astype(np.uint8)).convert('RGBA')
    out = Image.alpha_composite(out, face_img)
    out = out.convert('RGB')
    ea  = np.array(edge_img, dtype=float)
    out = np.clip(np.array(out, dtype=float) + ea, 0, 255)
    Image.fromarray(out.astype(np.uint8)).save('/home/runner/work/Ap/Ap/output.png')
    print("Saved output.png")


render()
