import { ReactNode } from "react";

type AuthLayoutProps = {
  hero: ReactNode;
  children: ReactNode;
};

export default function AuthLayout({
  hero,
  children,
}: AuthLayoutProps) {
  return (
    <section className="min-h-screen grid lg:grid-cols-2 bg-black">

      {/* Left Panel */}
      <div className="relative hidden overflow-hidden lg:flex items-center justify-center bg-[#0B1120]">

        {hero}

      </div>

      <div className="flex items-center justify-center px-6">

        <div className="w-full max-w-md">

          {children}

        </div>

      </div>

    </section>
  );
}