import { Scholarship, StudentProfile, ScoredScholarship } from "./type";

export function scoreScholarship(
  profile: StudentProfile,
  scholarship: Scholarship
): ScoredScholarship {
  let score = 0;
  const reasons: string[] = [];

  // ===========================
  // Preferred Country (20 points)
  // ===========================
  if (
    scholarship.country.toLowerCase() ===
    profile.preferred_country.toLowerCase()
  ) {
    score += 20;
    reasons.push("Matches your preferred study country.");
  }

  // ===========================
  // CGPA (30 points)
  // ===========================
  if (scholarship.minimum_cgpa !== null) {
    const difference = profile.cgpa - scholarship.minimum_cgpa;

    if (difference >= 1) {
      score += 30;
      reasons.push("Your CGPA is well above the minimum requirement.");
    } else if (difference >= 0.5) {
      score += 25;
      reasons.push("Your CGPA comfortably meets the requirement.");
    } else {
      score += 20;
      reasons.push("Your CGPA meets the minimum requirement.");
    }
  } else {
    score += 20;
    reasons.push("No CGPA requirement.");
  }

  // ===========================
  // Faculty (10 points)
  // ===========================
  if (
    scholarship.eligible_faculties.some(
      (faculty) =>
        faculty.toLowerCase() === profile.faculty.toLowerCase()
    )
  ) {
    score += 10;
    reasons.push("Your faculty is eligible.");
  }

  // ===========================
  // Department (20 points)
  // ===========================
  if (
    scholarship.eligible_departments.some(
      (department) =>
        department.toLowerCase() ===
        profile.department.toLowerCase()
    )
  ) {
    score += 20;
    reasons.push("Your department is eligible.");
  }

  // ===========================
  // Level (10 points)
  // ===========================
  if (
    scholarship.minimum_level !== null &&
    profile.level >= scholarship.minimum_level
  ) {
    score += 10;
    reasons.push("Your academic level satisfies the requirement.");
  }

  // ===========================
  // Funding Bonus (10 points)
  // ===========================
  if (scholarship.funding_type === "Fully Funded") {
    score += 10;
    reasons.push("Fully funded scholarship.");
  }

  return {
    ...scholarship,
    score,
    reasons,
  };
}