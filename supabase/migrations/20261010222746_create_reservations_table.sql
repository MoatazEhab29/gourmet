/*
# Create reservations table (single-tenant, no auth)

1. New Tables
- `reservations`
- `id` (uuid, primary key)
- `name` (text, not null) — guest's full name
- `email` (text, not null) — guest's email for confirmation
- `phone` (text, not null) — guest's phone number
- `reservation_date` (date, not null) — requested dining date
- `reservation_time` (text, not null) — requested dining time slot
- `guests` (integer, not null) — number of guests, default 2
- `special_requests` (text, nullable) — optional dietary/occasion notes
- `status` (text, not null, default 'pending') — pending, confirmed, cancelled
- `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `reservations`.
- Allow anon + authenticated CRUD because reservations are submitted without sign-in.
*/

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  reservation_date date NOT NULL,
  reservation_time text NOT NULL,
  guests integer NOT NULL DEFAULT 2,
  special_requests text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_reservations" ON reservations;
CREATE POLICY "anon_select_reservations" ON reservations FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_reservations" ON reservations;
CREATE POLICY "anon_insert_reservations" ON reservations FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_reservations" ON reservations;
CREATE POLICY "anon_update_reservations" ON reservations FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_reservations" ON reservations;
CREATE POLICY "anon_delete_reservations" ON reservations FOR DELETE
  TO anon, authenticated USING (true);
