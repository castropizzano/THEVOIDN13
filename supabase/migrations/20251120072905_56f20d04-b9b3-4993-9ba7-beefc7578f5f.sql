-- Remove zombie infrastructure tables that contradict "zero surveillance" philosophy
-- Keeping only: prompts table and its required infrastructure

-- Drop ALL policies first (including prompts policies that depend on has_role)
DROP POLICY IF EXISTS "Admins can view page views" ON page_views;
DROP POLICY IF EXISTS "Allow rate-limited page view inserts" ON page_views;
DROP POLICY IF EXISTS "Admins can view search queries" ON search_queries;
DROP POLICY IF EXISTS "Allow rate-limited search query inserts" ON search_queries;
DROP POLICY IF EXISTS "Admins can view section engagement" ON section_engagement;
DROP POLICY IF EXISTS "Allow rate-limited section engagement inserts" ON section_engagement;
DROP POLICY IF EXISTS "Allow rate-limited contact message inserts" ON contact_messages;
DROP POLICY IF EXISTS "Admins can view all subscribers" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Admins can delete newsletter subscribers" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Public can subscribe to newsletter" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Users can view their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON profiles;
DROP POLICY IF EXISTS "Admins can insert profiles" ON profiles;
DROP POLICY IF EXISTS "Users can delete their own profile" ON profiles;
DROP POLICY IF EXISTS "Admins can delete any profile" ON profiles;
DROP POLICY IF EXISTS "Users can view their own roles" ON user_roles;
DROP POLICY IF EXISTS "Anyone can view visible sections" ON page_sections;
DROP POLICY IF EXISTS "Admins can insert sections" ON page_sections;
DROP POLICY IF EXISTS "Admins can update sections" ON page_sections;
DROP POLICY IF EXISTS "Admins can delete sections" ON page_sections;
DROP POLICY IF EXISTS "Anyone can view section contents" ON section_contents;
DROP POLICY IF EXISTS "Admins can insert contents" ON section_contents;
DROP POLICY IF EXISTS "Admins can update contents" ON section_contents;
DROP POLICY IF EXISTS "Admins can delete contents" ON section_contents;
DROP POLICY IF EXISTS "Anyone can view content settings" ON content_settings;
DROP POLICY IF EXISTS "Admins can insert content settings" ON content_settings;
DROP POLICY IF EXISTS "Admins can update content settings" ON content_settings;
DROP POLICY IF EXISTS "Admins can delete content settings" ON content_settings;
DROP POLICY IF EXISTS "Anyone can view visible media assets" ON media_assets;
DROP POLICY IF EXISTS "Admins can insert media assets" ON media_assets;
DROP POLICY IF EXISTS "Admins can update media assets" ON media_assets;
DROP POLICY IF EXISTS "Admins can delete media assets" ON media_assets;
DROP POLICY IF EXISTS "Anyone can view visible video settings" ON video_settings;
DROP POLICY IF EXISTS "Admins can insert video settings" ON video_settings;
DROP POLICY IF EXISTS "Admins can update video settings" ON video_settings;
DROP POLICY IF EXISTS "Admins can delete video settings" ON video_settings;

-- Drop prompts admin policies (will recreate simple public read policy later)
DROP POLICY IF EXISTS "Anyone can view active prompts" ON prompts;
DROP POLICY IF EXISTS "Admins can insert prompts" ON prompts;
DROP POLICY IF EXISTS "Admins can update prompts" ON prompts;
DROP POLICY IF EXISTS "Admins can delete prompts" ON prompts;

-- Drop tables (CASCADE will drop dependent objects)
DROP TABLE IF EXISTS page_views CASCADE;
DROP TABLE IF EXISTS search_queries CASCADE;
DROP TABLE IF EXISTS section_engagement CASCADE;
DROP TABLE IF EXISTS contact_messages CASCADE;
DROP TABLE IF EXISTS newsletter_subscribers CASCADE;
DROP TABLE IF EXISTS section_contents CASCADE;
DROP TABLE IF EXISTS page_sections CASCADE;
DROP TABLE IF EXISTS content_settings CASCADE;
DROP TABLE IF EXISTS media_assets CASCADE;
DROP TABLE IF EXISTS video_settings CASCADE;
DROP TABLE IF EXISTS user_roles CASCADE;
DROP TABLE IF EXISTS profiles CASCADE;

-- Drop triggers (except prompts trigger)
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Drop functions that are no longer needed
DROP FUNCTION IF EXISTS check_page_view_rate_limit(text);
DROP FUNCTION IF EXISTS check_search_rate_limit(text);
DROP FUNCTION IF EXISTS check_engagement_rate_limit(text);
DROP FUNCTION IF EXISTS check_contact_rate_limit(text);
DROP FUNCTION IF EXISTS has_role(uuid, app_role);
DROP FUNCTION IF EXISTS handle_new_user();

-- Drop enum type
DROP TYPE IF EXISTS app_role;

-- Keep update_updated_at_column() function (used by prompts table trigger)

-- Recreate simple public read policy for prompts (no authentication needed)
CREATE POLICY "Anyone can view active prompts" 
ON prompts FOR SELECT 
USING (is_active = true);