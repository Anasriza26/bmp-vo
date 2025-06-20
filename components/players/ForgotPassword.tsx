"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail } from "lucide-react";
import Link from "next/link";

const ForgotPassword = () => {
  const [step, setStep] = useState<"details" | "verification">("details");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("LK");
  const [otp, setOtp] = useState(["3", "0", "6", "6"]);

  const handleSendCode = () => {
    setStep("verification");
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleVerify = () => {
    console.log("Verifying OTP:", otp.join(""));
  };

  const handleCancel = () => {
    setStep("details");
  };
  return (
    <>
      <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/BMP-Logo.jpg"
              alt="BMP Logo"
              width={126}
              height={40}
              className="w-[126px] h-[40px]"
            />
          </div>
          {step === "details" ? (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  Forgot Password
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                  We will send you a confirmation code
                </p>
              </div>
              <div>
                <Label htmlFor="phone" className="text-gray-700 font-medium">
                  Phone number
                </Label>
                <div className="flex mt-2 gap-2">
                  <Select value={countryCode} onValueChange={setCountryCode}>
                    <SelectTrigger className="w-20 h-12 border-gray-300 rounded-lg">
                      <SelectValue placeholder="LK" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="LK">LK</SelectItem>
                      <SelectItem value="US">US</SelectItem>
                      <SelectItem value="UK">UK</SelectItem>
                      <SelectItem value="IN">IN</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="flex-1 h-12 border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              <Button
                onClick={handleSendCode}
                className="w-full h-12 bg-white border border-green-500 text-green-600 font-medium hover:bg-green-50 rounded-lg"
              >
                Send Verification Code
              </Button>
            </div>
          ) : (
            // {/* Verification form goes here */}
            <div className="space-y-8 text-center">
              <div>
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-7 h-7 text-green-500" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Please check your message.
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  We&apos;ve sent a code to +94 774 33 8424
                </p>
              </div>

              <div className="flex justify-center gap-3">
                {otp.map((digit, index) => (
                  <Input
                    key={index}
                    type="text"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    className="w-14 h-14 text-center text-2xl font-semibold border-2 border-green-500 rounded-lg"
                    maxLength={1}
                  />
                ))}
              </div>

              <p className="text-sm text-gray-500">
                Didn’t get a code?{" "}
                <button className="text-green-600 font-medium underline">
                  Click to resend.
                </button>
              </p>

              <div className="space-y-3">
                <Button
                  onClick={handleVerify}
                  className="w-full h-12 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg"
                >
                  Verify
                </Button>
                <Button
                  onClick={handleCancel}
                  variant="outline"
                  className="w-full h-12 border border-gray-300 text-gray-700 font-medium rounded-lg"
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Footer text */}
      <div className="text-center text-xs text-gray-500 mt-8 px-4">
        BookMyPlay uses cookies for analytics personalized content and ads. By
        using Scale's services you agree to this use of cookies.{" "}
        <Link href="#" className="underline">
          Learn more
        </Link>
      </div>
    </>
  );
};

export default ForgotPassword;
