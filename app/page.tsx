"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../public/BMP-Logo.jpg";
import GoogleIcon from "../public/google-icon.jpg";
import Link from "next/link";
import CommonFooter from "@/components/common/CommonFooter";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validCredentials = {
    email: "user@example.com",
    password: "password123",
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      if (
        email === validCredentials.email &&
        password === validCredentials.password
      ) {
        router.push("/on-boarding");
      } else {
        setError("Invalid email or password");
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <main
      className="flex justify-center items-center h-screen max-h-screen overflow-hidden bg-cover bg-center relative px-2 sm:px-4"
      style={{ backgroundImage: "url('/bg-img.jpg')" }}
    >
      <div className="w-full max-w-[95vw] sm:max-w-md md:max-w-lg lg:max-w-xl bg-white bg-opacity-90 rounded-xl p-4 sm:p-8 md:p-4 md:mb-12">
        <Image
          src={Logo}
          alt="BookMyPlay Logo"
          className="mx-auto mb-5 sm:mb-1 md:mb-1 w-20 h-20 sm:w-24 sm:h-24 object-contain"
        />

        <div className="text-start mb-4 sm:mb-4 font-inter">
          <div className="font-semibold text-xl sm:text-3xl leading-7 sm:leading-8 text-[#101828] pb-[2px]">
            Sign in
          </div>
          <p className="font-normal text-sm sm:text-base leading-5 sm:leading-6 tracking-normal text-[#667085]">
            Welcome back! Please enter your details.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {error && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded text-sm">
              {error}
            </div>
          )}

          <div className="mb-3 sm:mb-4">
            <label
              htmlFor="email"
              className="font-medium text-sm leading-5 tracking-normal"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[42px] rounded-lg border border-gray-300 pt-2.5 pr-3.5 pb-2.5 pl-3.5 mt-1 text-sm"
              required
              autoComplete="email"
            />
          </div>

          <div className="mb-3 sm:mb-4">
            <label
              htmlFor="password"
              className="font-medium text-sm leading-5 tracking-normal"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[42px] rounded-lg border border-gray-300 pt-2.5 pr-3.5 pb-2.5 pl-3.5 mt-1 text-sm"
              required
              autoComplete="current-password"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-4 font-inter font-medium mt-3 sm:mt-4 gap-2">
            <div className="flex items-center">
              <input type="checkbox" id="remember-me" className="mr-2" />
              <label
                htmlFor="remember-me"
                className="text-xs sm:text-sm cursor-pointer"
              >
                Remember for 30 days
              </label>
            </div>
            <Link
              href="#"
              className="text-[#344054] text-xs sm:text-sm mt-2 sm:mt-0"
            >
              Forgot password?
            </Link>
          </div>

          <div className="mb-3 sm:mb-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-btncolor text-white py-2 rounded-[8px] mb-3 sm:mb-4 font-semibold text-base ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </button>

            <button
              type="button"
              className="w-full border flex items-center justify-center py-2 rounded font-semibold text-base"
            >
              <Image
                src={GoogleIcon}
                alt="Google"
                width={22}
                height={22}
                className="mr-2"
              />
              Sign in with Google
            </button>
          </div>
        </form>

        <div className="text-center mt-4 sm:mt-4">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link href="#" className="text-[#344054] font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </div>

     <CommonFooter />
    </main>
  );
}
