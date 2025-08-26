import { useSigninMutation } from "@/features/services/auth";
import { useState } from "react";
import { set_auth } from "@/features/slices/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signinSchema, type Signin } from "@/schema/signin";
import { useCookies } from "react-cookie";
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import clsx from "clsx";

export const Form = () => {
  const [error, setError] = useState<string | null>(null);
  const [signin, { isLoading }] = useSigninMutation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<Signin>({
    resolver: zodResolver(signinSchema),
  });

  const onSubmit = async (data: Signin) => {
    try {
      const response = await signin(data).unwrap();
      console.log(response);
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
      setError("Invalid login credentials. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error && (
        <div className="text-red-500 bg-red-500/5 p-5 border border-red-500 text-xs rounded-sm">
          {error}
        </div>
      )}
      <fieldset className="flex flex-col max-w-full flex-wrap items-start gap-4 py-3">
        <label
          htmlFor="email"
          className="flex flex-col min-w-40 flex-1 text-white text-base font-medium leading-normal"
        >
          Email Address
        </label>
        <div className="w-full">
          <input
            {...register("email")}
            disabled={isSubmitting || isLoading}
            placeholder="example@email.com"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#344d65] bg-[#1a2632] focus:border-[#344d65] h-14 placeholder:text-[#93adc8] p-[15px] text-base font-normal leading-normal"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </fieldset>
      <fieldset className="flex flex-col max-w-full flex-wrap items-start gap-4 py-3">
        <label
          htmlFor="password"
          className="flex flex-col min-w-40 flex-1 text-white text-base font-medium leading-normal"
        >
          Password
        </label>
        <div className="w-full">
          <input
            {...register("password")}
            disabled={isSubmitting || isLoading}
            type="password"
            placeholder="Enter your password"
            className={clsx(
              "form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#344d65] bg-[#1a2632] focus:border-[#344d65] h-14 placeholder:text-[#93adc8] p-[15px] text-base font-normal leading-normal",
              {
                "border-red-500 bg-red-500/5": errors.password,
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
      <Link
        to="/auth/reset-password"
        className="text-[#93adc8] text-sm font-normal leading-normal pb-3 pt-1 underline hover:text-blue-500"
      >
        Forgot password?
      </Link>
      <fieldset className="flex py-3">
        <button
          disabled={!isValid || isSubmitting}
          className={clsx(
            "flex min-w-[84px] max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg px-4 flex-1 bg-[#1773cf] text-white text-sm font-bold leading-normal tracking-[0.015em] h-14",
            {
              "opacity-50 cursor-not-allowed": !isValid || isSubmitting,
            }
          )}
        >
          <span className="truncate">
            {isSubmitting ? "Signing In..." : "Sign In"}
          </span>
        </button>
      </fieldset>
    </form>
  );
};
