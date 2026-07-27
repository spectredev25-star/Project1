/**
 * Represents a student's profile.
 * This should match the data stored in your Supabase Profiles table.
 */
export interface StudentProfile {
  user_id?: string;

  full_name: string;

  university: string;

  faculty: string;

  department: string;

  level: number;

  cgpa: number;

  country: string;

  preferred_country: string;
}

/**
 * Represents a scholarship from the database.
 * Your web scraper should output data in this format.
 */
export interface Scholarship {
  id: string;

  title: string;

  provider: string;

  description: string;

  application_url: string;

  image_url?: string;

  country: string;

  university?: string;

  funding_type:
    | "Fully Funded"
    | "Partially Funded"
    | "Tuition Only"
    | "Grant";

  degree_level: (
    | "Undergraduate"
    | "Masters"
    | "PhD"
  )[];

  eligible_countries: string[];

  eligible_faculties: string[];

  eligible_departments: string[];

  minimum_cgpa: number | null;

  minimum_level: number | null;

  language_requirements: {
    exam: string;
    minimum_score: number;
  }[];

  benefits: string[];

  required_documents: string[];

  tags: string[];

  deadline: string;

  created_at?: string;

  updated_at?: string;
}

export interface ScoredScholarship extends Scholarship {
  score: number;

  reasons: string[];
}