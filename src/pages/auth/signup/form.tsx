import { useSignupMutation } from "@/features/services/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type Signup } from "@/schema/auth";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { useState } from "react";
import { set_auth } from "@/features/slices/auth";
import { useCookies } from "react-cookie";
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router";

export const Form = () => {
  const [error, setError] = useState<string | null>(null);
  const [signup, { isLoading }] = useSignupMutation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<Signup>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: Signup) => {
    try {
      const response = await signup(data).unwrap();
      const { data: auth } = decodeToken(response.token) as {
        data: { id: string; email: string };
      };
      console.log(auth);
      set_auth({ id: auth.id, email: auth.email });
      setCookie("token", response.token);
      reset();
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setError("An error occurred during signup. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error && (
        <div className="text-red-500 bg-red-500/5 p-5 border border-red-500 text-xs">
          {error}
        </div>
      )}
      <fieldset className="flex flex-col max-w-full flex-wrap items-start gap-4 py-3">
        <label
          htmlFor="email"
          className="text-white text-base font-medium leading-normal"
        >
          Full Name
        </label>
        <div className="w-full">
          <input
            {...register("fullName")}
            placeholder="John Doe"
            className={clsx(
              "form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#344d65] bg-[#1a2632] focus:border-[#344d65] h-14 placeholder:text-[#93adc8] p-[15px] text-base font-normal leading-normal",
              {
                "border-red-500": errors.fullName,
              }
            )}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs  mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>
      </fieldset>
      <fieldset className="flex flex-col max-w-full flex-wrap items-start gap-4 py-3">
        <label
          htmlFor="email"
          className="text-white text-base font-medium leading-normal"
        >
          Email Address
        </label>
        <div className="w-full">
          <input
            {...register("email")}
            placeholder="example@email.com"
            className={clsx(
              "form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#344d65] bg-[#1a2632] focus:border-[#344d65] h-14 placeholder:text-[#93adc8] p-[15px] text-base font-normal leading-normal",
              {
                "border-red-500": errors.email,
              }
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-xs  mt-1">{errors.email.message}</p>
          )}
        </div>
      </fieldset>
      <fieldset className="flex flex-col max-w-full flex-wrap items-start gap-4 py-3">
        <label
          htmlFor="password"
          className="text-white text-base font-medium leading-normal"
        >
          Password
        </label>
        <div className="w-full">
          <input
            {...register("password")}
            type="password"
            placeholder="Enter your password"
            className={clsx(
              "form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#344d65] bg-[#1a2632] focus:border-[#344d65] h-14 placeholder:text-[#93adc8] p-[15px] text-base font-normal leading-normal",
              {
                "border-red-500": errors.password,
              }
            )}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
      </fieldset>
      <fieldset className="flex py-3">
        <button
          disabled={isLoading || isSubmitting || !isValid}
          className={clsx(
            "flex min-w-[84px] max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg px-4 flex-1 bg-[#1773cf] text-white text-sm font-bold leading-normal tracking-[0.015em] h-14",
            {
              "opacity-50 cursor-not-allowed":
                isLoading || isSubmitting || !isValid,
            }
          )}
        >
          <span className="truncate">
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </span>
        </button>
      </fieldset>
    </form>
  );
};
