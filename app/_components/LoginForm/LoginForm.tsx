"use client";

import { authenticate } from "@/app/lib/actions";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction}>
      <label htmlFor="name" className="block mb-2">
        <input
          type="text"
          name="name"
          id="name"
          className="border-2 rounded-sm p-1"
          placeholder="name"
        />
      </label>
      <label className="block mb-2" htmlFor="password">
        <input
          type="text"
          name="password"
          id="password"
          className="border-2 rounded-sm p-1"
          placeholder="password"
        />
      </label>
      <input type="hidden" name="redirectTo" value={callbackUrl} />
      <input
        aria-disabled={isPending}
        className="p-3 font-bold cursor-pointer bg-gray-200 rounded-sm"
        type="submit"
        value="Send"
      />
      {errorMessage && (
        <>
         
          <p className="text-sm text-red-500">{errorMessage}</p>
        </>
      )}
    </form>
  );
};

export default LoginForm;
