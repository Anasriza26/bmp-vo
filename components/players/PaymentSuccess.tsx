"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
const PaymentSuccess = () => {
  const handleGoToBookings = () => {
    // Navigation logic would go here
    console.log("Navigating to bookings...");
  };
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Header with Logo */}
        <header className="px-4 py-4 md:px-8 md:py-8">
          <Image
            src="/BMP-Logo.jpg"
            alt="Logo"
            width={126}
            height={40}
            className="w-[126px] h-[40px]"
          />
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 md:px-8">
          <div className="w-full max-w-md mx-auto md:max-w-lg text-center">
            {/* Success Icon */}
            <div className="mb-8 md:mb-12">
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8 md:w-10 md:h-10 text-white stroke-[3]" />
                </div>
              </div>
            </div>

            {/* Success Message */}
            <div className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-4 md:mb-6">
                Payment Successful
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Your payment was successful!
                <br />
                Just wait for your time to play.
              </p>
            </div>

            {/* Action Button */}
            <div className="w-full">
              <Link href={"/check-booking"}>
                <Button
                  onClick={handleGoToBookings}
                  variant="outline"
                  className="w-full h-12 md:h-14 text-green-600 border-green-600 hover:bg-green-50 hover:border-green-700 hover:text-green-700 font-medium text-base md:text-lg transition-colors duration-200"
                >
                  Go To My Bookings
                </Button>
              </Link>
            </div>
          </div>
        </main>

        {/* Footer Spacer for Mobile */}
        <div className="h-8 md:h-16"></div>
      </div>
    </>
  );
};

export default PaymentSuccess;
