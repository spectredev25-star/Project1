import { login } from './action'
import Link from 'next/link'
import SubmitButton from "@/components/ui/submit_button";


interface PageProps {
  searchParams: Promise<{ error?: string; message?: string;}>
}

export default async function LoginPage({ searchParams }: PageProps) {
  const { error , message } = await searchParams

  return (
    <>
    <section>
    <div className='p-4 flex justify-center items-center h-screen sign-up sign-card'>
      <div>
        {message && (
          <div className="mb-4 rounded-lg border border-green-300 bg-green-100 p-3 text-green-700">
        {message}
      </div>
    )}
    {error && (
      <div className="mb-4 rounded-lg border border-red-300 bg-red-100 p-3 text-red-700">
        {error}
        </div>
)}
    </div>
      <form action={login}>
        <div>
          <h1 className='text-2xl font-bold pb-4'>Log In</h1>
        <div>
        <p className='pb-2'>Email: </p>
        <input
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      </div>
       <div>
        <p className='pb-2'>Password: </p>
        <input
        type="password"
        name="password"
        placeholder="*******"
        required
      />
      </div>
      <div className='mt-4'>
        <Link href='/' className='underline mt-4'>
        Forgot Password?
        </Link>
      </div>
      <div className='log-in mt-6'>
      <SubmitButton idleText="Log In" loadingText="Logging in..." />
      </div>
      </div>
      </form>
      </div>
    </section>
    </>

  )
}
