-- Add length constraints to newsletter_subscribers table
-- This prevents attackers from bypassing client validation and inserting excessively long strings

ALTER TABLE newsletter_subscribers 
ALTER COLUMN email TYPE VARCHAR(255),
ALTER COLUMN full_name TYPE VARCHAR(100);