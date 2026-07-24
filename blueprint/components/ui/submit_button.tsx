'use client'

import { useFormStatus } from 'react-dom'

type SubmitButtonProps = {
  idleText: string
  loadingText: string
}

export default function SubmitButton({
  idleText,
  loadingText,
}: SubmitButtonProps) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-lg bg-blue-600 py-3 text-white font-medium disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {pending && (
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
      )}

      {pending ? loadingText : idleText}
    </button>
  )
}