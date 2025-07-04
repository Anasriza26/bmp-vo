"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  // Dummy user data
  const dummyEmail = "rizanas0526rz@gmail.com";
  const dummyPassword = "AnasRiza123";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation for the dummy data
    if (email === dummyEmail && password === dummyPassword) {
      // Redirect to the home page on successful login
      router.push("/otp");
    } else {
      // Show error message on failure
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Main content container */}
        <div className="flex items-center justify-center min-h-screen md:min-h-[calc(100vh-80px)] px-6 py-8">
          <div className="w-full max-w-md space-y-6">
            {/* Logo */}
            <Image
              src="/BMP-Logo.jpg"
              alt="Logo"
              width={126}
              height={40}
              className="w-[126px] h-[40px] mx-auto"
            />

            {/* Sign in form */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Sign in
                </h1>
                <p className="text-gray-600">
                  Welcome back! Please enter your details.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700"
                  >
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" className="border-gray-300" />
                    <Label htmlFor="remember" className="text-sm text-gray-700">
                      Remember for 30 days
                    </Label>
                  </div>
                  <Link
                    href={"/forgot-password"}
                    className="text-sm text-green-600 hover:text-green-700"
                  >
                    Forgot password
                  </Link>
                </div>

                {/* Error Message */}
                {errorMessage && (
                  <p className="text-sm text-red-600">{errorMessage}</p>
                )}

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium"
                >
                  Sign in
                </Button>

                <Button
                  variant="outline"
                  className="w-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 py-3 rounded-lg font-medium flex items-center justify-center gap-3"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Sign in with Google
                </Button>
              </form>
            </div>

            {/* Footer text */}
            <div className="text-center text-xs text-gray-500 mt-8 px-4">
              BookMyPlay uses cookies for analytics personalized content and
              ads. By using Scale's services you agree to this use of cookies.{" "}
              <Link href="#" className="underline">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
