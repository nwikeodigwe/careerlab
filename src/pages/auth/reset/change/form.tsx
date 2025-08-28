import { useForm } from "react-hook-form";
import clsx from "clsx";
import { changePasswordSchema, type ChangePassword } from "@schema/password";
import { zodResolver } from "@hookform/resolvers/zod";
import { useChangePasswordMutation } from "@/features/services/auth";
import { Response } from "@/components/response";
import { useState } from "react";

const Form = () => {
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const [response, setResponse] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<ChangePassword>({ resolver: zodResolver(changePasswordSchema) });

  const onSubmit = async (data: ChangePassword) => {
    try {
      const response = await changePassword(data).unwrap();
      console.log(response);
      reset();
    } catch (error) {
      console.error(error);
      setResponse({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Response response={response} />
      <fieldset className="flex flex-col max-w-full flex-wrap items-end gap-4 py-3">
        <label
          htmlFor="newPassword"
          className="flex flex-col min-w-40 flex-1 text-white text-base font-medium leading-normal pb-2"
        >
          New Password
        </label>
        <div className="w-full flex flex-col">
          <input
            {...register("newPassword")}
            placeholder="Enter your username"
            className={clsx(
              "form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#344d65] bg-[#1a2632] focus:border-[#344d65] h-14 placeholder:text-[#93adc8] p-[15px] text-base font-normal leading-normal",
              { "border-red-500 bg-red-500/5": errors.newPassword }
            )}
          />
          {errors.newPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.newPassword.message}
            </p>
          )}
        </div>
      </fieldset>
      <fieldset className="flex flex-col max-w-full flex-wrap items-end gap-4 py-3">
        <label
          htmlFor="repeatPassword"
          className="flex flex-col min-w-40 flex-1 text-white text-base font-medium leading-normal pb-2"
        >
          Repeat Password
        </label>
        <div className="w-full flex flex-col">
          <input
            {...register("repeatPassword")}
            placeholder="Repeat your password"
            className={clsx(
              "form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#344d65] bg-[#1a2632] focus:border-[#344d65] h-14 placeholder:text-[#93adc8] p-[15px] text-base font-normal leading-normal",
              { "border-red-500 bg-red-500/5": errors.newPassword }
            )}
          />
          {errors.newPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.newPassword.message}
            </p>
          )}
        </div>
      </fieldset>
      <fieldset className="flex py-3">
        <button
          disabled={isSubmitting || !isValid}
          className="flex min-w-[84px] max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg px-4 flex-1 bg-[#1773cf] text-white text-sm font-bold leading-normal tracking-[0.015em] h-14"
        >
          <span className="truncate">
            {isLoading || isSubmitting
              ? "Changing Password..."
              : "Change Password"}
          </span>
        </button>
      </fieldset>
    </form>
  );
};

export default Form;
