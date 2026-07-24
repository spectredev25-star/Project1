import Link from "next/link";

type SidebarProps = {
  className?: string;
};

export default function SideBar({ className = "" }: SidebarProps) {
  return (
    <section
      className={`left-0 top-0 pt-32 pl-4 sidebar align-middle h-screen ${className}`}
    >
      <nav className="flex flex-col gap-4">
        <div>
          <Link href="/">Dashboard</Link>
        </div>

        <div>
          <Link href="/">Scholarships</Link>
        </div>

        <div>
          <Link href="/">Applications</Link>
        </div>

        <div>
          <Link href="/profile_update">Profile</Link>
        </div>

        <div>
          <Link href="/">Settings</Link>
        </div>

        <Link href="/">
          <button>Log Out</button>
        </Link>
      </nav>
    </section>
  );
}