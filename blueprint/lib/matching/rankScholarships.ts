import { ScoredScholarship } from "./type";

export function rankScholarships(
  scholarships: ScoredScholarship[],
  limit: number = 10
): ScoredScholarship[] {
  return scholarships
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}