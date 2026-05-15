-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Brands table
CREATE TABLE IF NOT EXISTS brands (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  brand_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  contact_email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  website TEXT,
  logo_url TEXT,
  bio TEXT,
  industry TEXT,
  company_size TEXT,
  contact_phone TEXT,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'suspended')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Sponsorships table
CREATE TABLE IF NOT EXISTS sponsorships (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  brand_id UUID NOT NULL REFERENCES brands(id) ON DELETE CASCADE,
  tier TEXT NOT NULL CHECK (tier IN ('starter', 'adventurer', 'expedition', 'summit')),
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'paused', 'cancelled', 'expired')),
  monthly_amount DECIMAL(10,2) NOT NULL,
  start_date DATE NOT NULL DEFAULT CURRENT_DATE,
  end_date DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Payments table
CREATE TABLE IF NOT EXISTS payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  brand_id UUID NOT NULL REFERENCES brands(id) ON DELETE CASCADE,
  sponsorship_id UUID REFERENCES sponsorships(id),
  amount DECIMAL(10,2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'failed', 'refunded')),
  payment_date TIMESTAMPTZ,
  description TEXT,
  stripe_payment_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Team members table
CREATE TABLE IF NOT EXISTS team_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  bio TEXT,
  image_url TEXT,
  twitter_url TEXT,
  instagram_url TEXT,
  linkedin_url TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Gallery items table
CREATE TABLE IF NOT EXISTS gallery_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL CHECK (category IN ('landscape', 'camping', 'adventure', 'night', 'behind-the-scenes')),
  image_url TEXT NOT NULL,
  is_featured BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_brands_email ON brands(contact_email);
CREATE INDEX IF NOT EXISTS idx_sponsorships_brand ON sponsorships(brand_id);
CREATE INDEX IF NOT EXISTS idx_payments_brand ON payments(brand_id);
CREATE INDEX IF NOT EXISTS idx_gallery_category ON gallery_items(category);
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_messages(status);

-- updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply triggers
CREATE TRIGGER update_brands_updated_at BEFORE UPDATE ON brands FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_sponsorships_updated_at BEFORE UPDATE ON sponsorships FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_payments_updated_at BEFORE UPDATE ON payments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_team_members_updated_at BEFORE UPDATE ON team_members FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_gallery_items_updated_at BEFORE UPDATE ON gallery_items FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_contact_messages_updated_at BEFORE UPDATE ON contact_messages FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security
ALTER TABLE brands ENABLE ROW LEVEL SECURITY;
ALTER TABLE sponsorships ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- RLS Policies
-- Service role bypasses RLS
-- Public read for team_members and gallery_items
CREATE POLICY "Public read team_members" ON team_members FOR SELECT USING (true);
CREATE POLICY "Public read gallery_items" ON gallery_items FOR SELECT USING (true);

-- Seed data - Team members
INSERT INTO team_members (name, role, bio, display_order) VALUES
('Alex Rivera', 'Founder & Lead Adventurer', 'Former wilderness guide with 15+ years of experience. Founded Live31 after a transformative solo expedition in 2021 to share authentic outdoor adventures with the world.', 1),
('Sarah Chen', 'Head of Partnerships', 'Brand partnerships specialist with a background in outdoor industry marketing. Connects adventurous brands with our wilderness audience.', 2),
('Marcus Webb', 'Technical Director', 'Full-stack developer and drone pilot. Ensures our 24/7 live streams stay connected even in the most remote wilderness locations.', 3),
('Priya Patel', 'Content Strategist', 'Digital storyteller who crafts compelling narratives around our wilderness journeys, growing our audience across all platforms.', 4),
('Jordan Lee', 'Wilderness Guide', 'Certified wilderness guide and survival expert. Keeps the team safe while exploring the most challenging terrains.', 5),
('Emma Torres', 'Brand Manager', 'Creative director managing brand identity and sponsor integrations to ensure authentic wilderness storytelling.', 6);

-- Seed data - Gallery items
INSERT INTO gallery_items (title, description, category, image_url, is_featured, display_order) VALUES
('Mountain Dawn', 'First light breaking over the peaks', 'landscape', '/gallery/mountain-dawn.jpg', true, 1),
('Base Camp Setup', 'Our expedition base camp at 8,000 feet', 'camping', '/gallery/base-camp.jpg', false, 2),
('Summit Push', 'The final push to the peak', 'adventure', '/gallery/summit-push.jpg', false, 3),
('Milky Way Over Ridge', 'Night sky photography from high alpine camp', 'night', '/gallery/milky-way.jpg', false, 4),
('Gear Check', 'Behind the scenes gear preparation', 'behind-the-scenes', '/gallery/gear-check.jpg', false, 5),
('River Crossing', 'Navigating the swift mountain river', 'adventure', '/gallery/river-crossing.jpg', false, 6),
('Valley of Giants', 'Ancient forest in morning mist', 'landscape', '/gallery/valley-giants.jpg', false, 7),
('Fire Circle', 'Evening camp fire in the backcountry', 'camping', '/gallery/fire-circle.jpg', false, 8),
('Northern Lights', 'Aurora borealis from tundra camp', 'night', '/gallery/northern-lights.jpg', true, 9),
('Camera Setup', 'Setting up the live stream rig', 'behind-the-scenes', '/gallery/camera-setup.jpg', false, 10),
('Cliff Face', 'Technical climbing on granite', 'adventure', '/gallery/cliff-face.jpg', false, 11),
('Desert Sunset', 'Golden hour in the high desert', 'landscape', '/gallery/desert-sunset.jpg', false, 12);
