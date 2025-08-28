import { useForm } from "react-hook-form";
import { clsx } from "clsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetSchema } from "@/schema/reset";
import { useResetPasswordMutation } from "@/features/services/auth";
import { Response } from "@/components/response";
import { useState } from "react";

type resetPassword = { email: string };
const Form = () => {
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const [response, setResponse] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting, errors },
  } = useForm<resetPassword>({
    resolver: zodResolver(resetSchema),
  });

  const onsubmit = async (data: resetPassword) => {
    try {
      const res = await resetPassword(data).unwrap();
      console.log(res);
      setResponse({
        type: "success",
        message: "If the email exists, a reset link has been sent.",
      });
      reset();
    } catch (err) {
      setResponse({
        type: "error",
        message: "An error occurred. Please try again.",
      });
      console.error(err);
    }
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <Response response={response} />
      <fieldset className="flex flex-col max-w-full flex-wrap items-start gap-4 py-3">
        <label
          htmlFor="email"
          className="flex flex-col min-w-40 flex-1 text-white text-base font-medium leading-normal pb-2"
        >
          Email Address
        </label>
        <div className="w-full flex flex-col">
          <input
            {...register("email")}
            placeholder="Enter your email"
            disabled={isSubmitting || isLoading}
            className={clsx(
              "form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#344d65] bg-[#1a2632] focus:border-[#344d65] h-14 placeholder:text-[#93adc8] p-[15px] text-base font-normal leading-normal",
              { "border-red-500 bg-red-500/5": errors.email }
            )}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
      </fieldset>
      <fieldset className="flex py-3">
        <button
          disabled={isSubmitting || !isValid || isLoading}
          className={clsx(
            "flex min-w-[84px] max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg px-4 flex-1 bg-[#1773cf] text-white text-sm font-bold leading-normal tracking-[0.015em] h-14",
            {
              "opacity-50 cursor-not-allowed":
                isSubmitting || !isValid || isLoading,
            }
          )}
        >
          <span className="truncate">
            {isSubmitting || isLoading
              ? "Resetting Password..."
              : "Reset Password"}
          </span>
        </button>
      </fieldset>
    </form>
  );
};

export default Form;
