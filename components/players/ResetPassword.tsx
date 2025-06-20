"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Key } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ResetPassword = () => {
  return (
    <>
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        {/* Main Content */}
        <div className="w-full max-w-md mx-auto bg-white  p-6 mt-11 md:mt-0 md:max-w-lg lg:max-w-xl">
          {/* Logo */}
          <Image
            src="/BMP-Logo.jpg"
            alt="Logo"
            width={126}
            height={40}
            className="w-[126px] h-[40px] mx-auto"
          />

          {/* Header */}
          <div className="mb-8 mt-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Reset Password
            </h1>
            <p className="text-gray-600">Enter you new password</p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="email"
                  type="email"
                  placeholder="example@mail.com"
                  className="pl-10 h-12 border-0 rounded-lg bg-gray-50"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </Label>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="pl-10 h-12 border-0 rounded-lg bg-gray-50"
                />
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <Label
                htmlFor="confirmPassword"
                className="text-sm font-medium text-gray-700"
              >
                Confirm Password
              </Label>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Re Enter your password"
                  className="pl-10 h-12 border-0 rounded-lg bg-gray-50"
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg"
            >
              Reset Password
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-16 text-center">
            <p className="text-xs text-gray-500 leading-relaxed">
              BookMyPlay uses cookies for analytics personalized content and
              ads. By using Scale's servives you agree to this use of cookies.{" "}
              <Link href="#" className="text-gray-700 underline">
                Learn more
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
