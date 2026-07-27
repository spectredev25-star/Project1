import { updatePassword } from "./action";

export default function ResetPassword() {
  return (
    <form action={updatePassword}>
      <input
        type="password"
        name="password"
        placeholder="New Password"
        required
      />

      <button type="submit">
        Update Password
      </button>
    </form>
  );
}