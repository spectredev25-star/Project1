import { ScoredScholarship } from "@/lib/matching/type";

type ScholarshipCardProps = {
  scholarship: ScoredScholarship;
};

export default function ScholarshipCard({
  scholarship,
}: ScholarshipCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 hover:shadow-md transition">

      {/* Header */}
      <div className="flex justify-between items-start gap-4">

        <div>
          <h3 className="text-xl font-bold">
            {scholarship.title}
          </h3>

          <p className="text-sm text-gray-500">
            {scholarship.provider}
          </p>
        </div>

        <span className="rounded-full bg-blue-600 text-white px-3 py-1 text-sm font-semibold">
          {scholarship.score}% Match
        </span>

      </div>

      {/* Description */}
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        {scholarship.description}
      </p>

      {/* Basic Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">

        <p>
          🌍 <strong>Country:</strong> {scholarship.country}
        </p>

        <p>
          💰 <strong>Funding:</strong> {scholarship.funding_type}
        </p>

        <p>
          🎓 <strong>Degree:</strong>{" "}
          {scholarship.degree_level.join(", ")}
        </p>

        <p>
          ⭐ <strong>Minimum CGPA:</strong>{" "}
          {scholarship.minimum_cgpa ?? "None"}
        </p>

        <p>
          📈 <strong>Minimum Level:</strong>{" "}
          {scholarship.minimum_level ?? "None"}
        </p>

        <p>
          📅 <strong>Deadline:</strong>{" "}
          {scholarship.deadline}
        </p>

      </div>

      {/* Eligible Faculties */}
      <div className="mt-5">
        <h4 className="font-semibold mb-2">
          Eligible Faculties
        </h4>

        <div className="flex flex-wrap gap-2">
          {scholarship.eligible_faculties.map((faculty) => (
            <span
              key={faculty}
              className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm"
            >
              {faculty}
            </span>
          ))}
        </div>
      </div>

      {/* Eligible Departments */}
      <div className="mt-5">
        <h4 className="font-semibold mb-2">
          Eligible Departments
        </h4>

        <div className="flex flex-wrap gap-2">
          {scholarship.eligible_departments.map((department) => (
            <span
              key={department}
              className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm"
            >
              {department}
            </span>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="mt-5">
        <h4 className="font-semibold mb-2">
          Benefits
        </h4>

        <ul className="list-disc ml-5 space-y-1">
          {scholarship.benefits.map((benefit) => (
            <li key={benefit}>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Why You Match */}
      <div className="mt-5">
        <h4 className="font-semibold mb-2">
          Why You Match
        </h4>

        <ul className="list-disc ml-5 space-y-1">
          {scholarship.reasons.map((reason, index) => (
            <li key={index}>
              {reason}
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        {scholarship.tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-3 py-1 rounded-full text-xs"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Apply Button */}
      <div className="mt-6">
        <a
          href={scholarship.application_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 transition"
        >
          Apply Now →
        </a>
      </div>

    </div>
  );
}