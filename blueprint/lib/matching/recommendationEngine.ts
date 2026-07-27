import { StudentProfile, Scholarship, ScoredScholarship } from "./type";
import { filterScholarships } from "./filterScholarships";
import { scoreScholarship } from "./scoreScholarship";
import { rankScholarships } from "./rankScholarships";

export function recommendationEngine(
  profile: StudentProfile,
  scholarships: Scholarship[]
): ScoredScholarship[] {
  // Step 1: Filter scholarships that the student is eligible for
  const filteredScholarships = filterScholarships(
    profile,
    scholarships
  );

  // Step 2: Score each scholarship
  const scoredScholarships = filteredScholarships.map((scholarship) =>
    scoreScholarship(profile, scholarship)
  );

  // Step 3: Rank them by score
  return rankScholarships(scoredScholarships);
}