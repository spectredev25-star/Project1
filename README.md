# Blueprint ScholarMatch AI

### Personalized Scholarship Discovery & Matching Platform

**Blueprint ScholarMatch AI** is a web application prototype designed to help students discover scholarship opportunities relevant to their academic profiles, educational backgrounds, and preferences.

The project explores how structured student information and scholarship eligibility criteria can be used to make scholarship discovery more focused and efficient.

> **Project status:** Version 1 Prototype  
> **Data status:** Mock scholarship data  
> **Purpose:** Portfolio and demonstration project

---

## Project Preview

![Blueprint ScholarMatch AI Dashboard](./assets/Screenshot(509).png)

*Blueprint ScholarMatch AI — application dashboard preview.*

**Live Demo:** [View the deployed application](https://blueprint-livid-five.vercel.app/)

---

## Problem Statement

Scholarship opportunities are often distributed across different websites, institutional portals, and online communities. Students may need to search multiple sources, review extensive eligibility requirements, and manually determine which opportunities align with their qualifications.

This process can be time-consuming and may make relevant opportunities harder to discover.

Blueprint ScholarMatch AI explores a more personalized approach to scholarship discovery by using student profile information and scholarship criteria to help identify potentially relevant opportunities.

## Proposed Solution

The platform provides a centralized interface where students can create profiles, explore scholarship opportunities, and receive recommendations based on available academic information and preferences.

Rather than treating scholarship discovery as a simple listing experience, Blueprint explores how structured eligibility criteria can help narrow the search toward opportunities that may be suitable for individual students.

## Key Features

- **Student Authentication:** Registration and login functionality.
- **Password Recovery:** Forgot-password and password-reset flows.
- **Student Profiles:** Collection and management of academic and personal preference information.
- **Scholarship Discovery:** A centralized interface for exploring scholarship opportunities.
- **Profile-Based Matching:** A prototype matching workflow using available student information and scholarship criteria.
- **Student Dashboard:** A personalized interface for accessing profile information and scholarship recommendations.
- **Responsive Interface:** A dark-themed interface designed for usability across supported screen sizes.
- **Cloud Deployment:** Hosted application accessible through Vercel.

## Current Implementation & Data Transparency

Blueprint ScholarMatch AI is currently a prototype. The scholarship records displayed by the application are **mock data created for development and demonstration purposes**.

The project does not currently rely on a production web scraper or a continuously updated database of verified scholarship opportunities. Consequently, the displayed records should not be treated as live scholarship listings, and recommendations should not be interpreted as confirmed eligibility or acceptance.

The current implementation focuses on demonstrating the application workflow, student profile management, and the foundations of criteria-based scholarship matching.

## Technology Stack

| Technology | Purpose |
|---|---|
| Next.js | Application framework and routing |
| React | User interface development |
| TypeScript | Type-safe application development |
| Tailwind CSS | Styling and responsive layouts |
| Supabase Auth | User authentication |
| Supabase / PostgreSQL | Data storage and relational database |
| Row Level Security (RLS) | Database access control |
| Vercel | Application deployment |

## Application Workflow

1. A student creates an account or signs in.
2. The student provides academic information and preferences.
3. The application uses available profile information and scholarship criteria to identify relevant records.
4. The student explores recommended opportunities and reviews their available details.
5. The student can use the displayed information to understand which opportunities may be worth investigating further.

## Getting Started

### Prerequisites

Ensure that you have the following installed:

- Node.js (a supported LTS version)
- npm
- Git
- A Supabase project

### Installation

**1. Clone the repository**

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd blueprint
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure environment variables**

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

Replace the placeholder values with the corresponding credentials from your Supabase project.

**4. Configure the database**

Set up the required database tables, authentication settings, and Row Level Security policies according to the project's implementation.

**5. Start the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

To check the production build locally, run:

```bash
npm run build
npm run start
```

## Security Considerations

- Authentication is managed through Supabase Auth.
- Row Level Security policies are used to restrict database access according to configured authorization rules.
- Environment-specific configuration is supplied through environment variables.
- Secret keys must not be committed to the repository.
- Database permissions and policies should be reviewed before any production deployment.

## Current Limitations

- Scholarship listings use mock data.
- Automated scholarship scraping and data synchronization are not implemented.
- Matching recommendations have not been validated against a sufficiently large, labeled dataset.
- Recommendations do not guarantee eligibility, application success, or scholarship awards.
- The platform is a demonstration prototype rather than a production scholarship service.

## Roadmap

Potential future improvements include:

- Automated collection of scholarship information from permitted, reliable sources.
- Scholarship data validation and freshness monitoring.
- More advanced eligibility scoring and AI-assisted ranking.
- Scholarship organization registration and management tools.
- Scholarship application tracking.
- Improved matching evaluation using precision, recall, and relevance feedback.
- Additional accessibility and user experience improvements.

## Learning Outcomes

Developing Blueprint ScholarMatch AI provided practical experience in:

- Building a full-stack web application.
- Integrating authentication with a relational database.
- Implementing database access controls.
- Managing environment variables and deployment configuration.
- Debugging production build and deployment issues.
- Designing user-facing workflows around a defined problem.
- Structuring an application for future feature expansion.

## Future Vision

Blueprint ScholarMatch AI explores the potential for a more personalized scholarship discovery experience—one that helps students navigate opportunities through structured academic information and eligibility-based recommendations.

The long-term objective is to reduce the effort involved in discovering relevant opportunities while providing a foundation for more advanced matching and scholarship data management.

---

## Author

**Spectre Dev**

Software Engineering · Data & Analytics · Engineering Systems

- GitHub: [Your GitHub Profile](https://github.com/spectredev25-star)


---

*Blueprint ScholarMatch AI is an independent portfolio project. Scholarship records shown in the current prototype are mock data and are not intended to represent verified, currently available funding opportunities.*
