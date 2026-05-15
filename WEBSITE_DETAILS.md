# Live31 Website Details

## 1) Website Purpose
Live31 is a sponsorship-focused outdoor adventure platform. The site presents a 24/7 wilderness live-stream concept, markets sponsorship packages, and provides a brand login/dashboard experience for sponsors.

## 2) Global Site Structure
- **Framework:** Next.js (App Router)
- **Main layout:** Shared navbar + footer on non-dashboard pages
- **Dashboard layout:** Separate authenticated layout with left sidebar
- **Styling:** Tailwind CSS utility classes with a dark adventure-themed visual style
- **Icons:** Lucide icons across UI

## 3) Navigation (Top Navbar)
Main links:
- `/` Home
- `/about` About
- `/gallery` Gallery
- `/members` Team
- `/social` Social
- `/contact` Contact
- `/login` Brand Login

## 4) Public Pages and What They Contain

### `/` Home
Contains:
- Hero section with launch messaging
- Stats cards (streaming, destinations, audience, views)
- "What We Do" feature grid
- "Why Sponsor" value proposition
- "How It Works" 4-step process
- Sponsorship package cards (Starter, Adventurer, Expedition, Summit)
- CTA sections linking to sponsorship/login/contact

### `/about`
Contains:
- Live31 story and mission/vision
- Long-form founder/origin narrative
- Core values (authenticity, nature respect, community, adventure)
- Multi-phase roadmap (launch → tours → global expedition → documentary)

### `/gallery`
Contains:
- Filterable gallery categories (All, Landscape, Camping, Adventure, Night, Behind the Scenes)
- Image grid with featured sizing
- Click-to-open image modal with details

### `/members`
Contains:
- Team member profiles (name, role, bio, image)
- Social profile links per member
- CTA to contact/join

### `/social`
Contains:
- Social platform cards (YouTube, Twitch, Instagram, X, Facebook, TikTok)
- Platform-specific descriptions + feature tags
- Stats summary cards
- Newsletter form UI section

### `/contact`
Contains:
- Contact info cards (email/phone/location/response time)
- Contact form (name, email, subject, message)
- Form submission status UI (sending/success)
- Posts to backend endpoint `/api/contact`

### `/login`
Contains:
- Brand login and registration toggle in one screen
- Registration fields: brand name, contact name, email, password, website
- Login fields: email, password
- Password visibility toggle
- On login success, stores brand info in localStorage and routes to `/dashboard`

### Legal pages
- `/privacy` Privacy Policy
- `/terms` Terms & Conditions
- `/refund` Refund Policy

## 5) Authentication & Route Protection Behavior
- Middleware checks a session cookie (`live31_session`).
- If user is not authenticated and visits `/dashboard*`, they are redirected to `/login`.
- If user is authenticated and visits non-dashboard non-API routes, they are redirected to `/dashboard`.
- Logout clears session cookie and local storage values.

## 6) Dashboard Area (Authenticated)
All dashboard pages share a sidebar with links to:
- `/dashboard` Overview
- `/dashboard/sponsorships`
- `/dashboard/payments`
- `/dashboard/livestream`
- `/dashboard/analytics`
- `/dashboard/profile`
- `/dashboard/settings`

### `/dashboard` (Overview)
- Brand welcome header
- KPI cards (active sponsorships, investment, impressions, stream hours)
- Recent activity feed
- Upcoming benefits
- Upgrade CTA

### `/dashboard/sponsorships`
- Current plan summary
- Sponsorship value/features explanation
- Tier comparison cards (Starter, Adventurer, Expedition, Summit)
- Upgrade action UI

### `/dashboard/payments`
- Total invested, next payment, active tier cards
- Payment method card
- Payment history table with status labels/icons
- Export CSV action UI

### `/dashboard/livestream`
- Stream status panel
- Brand integration summary
- Upcoming streams with integration notes
- Recent stream performance snapshots

### `/dashboard/analytics`
- Top metric cards (impressions, viewers, watch hours, engagement)
- Weekly performance chart
- Platform traffic breakdown
- Exposure log table

### `/dashboard/profile`
- Brand profile form
- Editable company/contact info fields
- Avatar/logo area and save action UI

### `/dashboard/settings`
- Notification preference toggles
- Privacy toggles
- Password change form
- Account deletion “danger zone” UI

## 7) Backend/API Endpoints Used by the Website
- `POST /api/auth/register`
  - Creates brand auth user + brand record (requires brand/contact/email/password)
- `POST /api/auth/login`
  - Validates input, finds brand, sets session cookie
- `POST /api/auth/logout`
  - Clears session cookie
- `POST /api/contact`
  - Saves contact form submissions to `contact_messages`

## 8) Data/Storage Model (Implemented in Supabase Migration)
Tables include:
- `brands`
- `sponsorships`
- `payments`
- `team_members`
- `gallery_items`
- `contact_messages`

Schema includes:
- UUID primary keys
- status/payment tier checks
- indexes for key lookups
- updated_at triggers
- row-level security policies
- seed data for team members and gallery

## 9) Footer Content
Footer includes:
- Company links (About, Team, Gallery, Contact)
- Legal links (Privacy, Terms, Refund)
- Sponsor links (Brand Login, Packages, Benefits, Social)
- Social icons/links
- Contact snippets (email, phone, location)

## 10) Current State Notes
- The website is heavily content-driven with demo/static dashboard data in many dashboard views.
- Authentication/session behavior is implemented via custom cookie token + middleware checks.
- Contact form and auth endpoints are wired to Supabase-backed server actions/API routes.
