import { Scholarship, StudentProfile } from "./type";

export function filterScholarships(
  profile: StudentProfile,
  scholarships: Scholarship[]
): Scholarship[] {
  const today = new Date();

  return scholarships.filter((scholarship) => {
    // Deadline
    if (new Date(scholarship.deadline) < today) {
      return false;
    }

    // Eligible country
    if (
      scholarship.eligible_countries.length > 0 &&
      !scholarship.eligible_countries.some(
        (country) =>
          country.toLowerCase() === profile.country.toLowerCase()
      )
    ) {
      return false;
    }

    // CGPA
    if (
      scholarship.minimum_cgpa !== null &&
      profile.cgpa < scholarship.minimum_cgpa
    ) {
      return false;
    }

    // Level
    if (
      scholarship.minimum_level !== null &&
      profile.level < scholarship.minimum_level
    ) {
      return false;
    }

    return true;
  });
}