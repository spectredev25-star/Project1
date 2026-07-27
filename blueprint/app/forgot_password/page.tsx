import { forgotPassword } from "./action";

export default function ResetPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <form action={forgotPassword} className="space-y-4 w-full max-w-md">

        <h1 className="text-2xl font-bold">
          Reset Password
        </h1>

        <input
          type="password"
          name="password"
          placeholder="Enter your new password"
          required
          className="w-full rounded border p-3"
        />

        <button
          type="submit"
          className="w-full rounded bg-blue-600 p-3 text-white"
        >
          Update Password
        </button>

      </form>
    </main>
  );
}