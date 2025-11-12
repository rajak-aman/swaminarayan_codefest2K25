-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Create team_registrations table
CREATE TABLE public.team_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  team_name TEXT NOT NULL,
  college TEXT NOT NULL,
  domain TEXT NOT NULL,
  
  -- Team Leader
  leader_name TEXT NOT NULL,
  leader_email TEXT NOT NULL,
  leader_phone TEXT NOT NULL,
  
  -- Team Members
  member2_name TEXT NOT NULL,
  member2_email TEXT NOT NULL,
  member2_phone TEXT NOT NULL,
  
  member3_name TEXT,
  member3_email TEXT,
  member3_phone TEXT,
  
  member4_name TEXT,
  member4_email TEXT,
  member4_phone TEXT,
  
  -- Project Details
  project_idea TEXT NOT NULL,
  
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.team_registrations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public registration)
CREATE POLICY "Anyone can register a team"
ON public.team_registrations
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Create policy to allow users to view all registrations (for admin purposes)
CREATE POLICY "Anyone can view registrations"
ON public.team_registrations
FOR SELECT
TO anon, authenticated
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_team_registrations_updated_at
BEFORE UPDATE ON public.team_registrations
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();