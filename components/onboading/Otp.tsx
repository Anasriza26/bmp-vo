"use client";

import React from "react";
import Image from "next/image";
import bgImage from "@/components/assets/bg-img.jpg";
import Logo from "@/components/assets/BMP-Logo.jpg";
import Link from "next/link";

const otp: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle verification logic here
  };

  return (
    <>
      <main>
        <div aria-hidden="true" className="fixed inset-0 -z-10">
          <Image
            alt="background"
            className="w-full h-full object-cover"
            src={bgImage}
          />
        </div>

        <div className="mt-[60px] ml-[60px]">
          <Image src={Logo} alt="Owner Details" width={133} height={42} />
        </div>

        <div className="flex justify-center items-center min-h-[calc(100vh-96px)] px-4">
          <section
            aria-labelledby="secure-dashboard-title"
            className="bg-white rounded-xl shadow-lg max-w-2xl w-full p-8"
            role="region"
          >
            <div className="flex items-center justify-start mb-6">
              <div
                aria-hidden="true"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#D4F7D9] shadow-[0_0_15px_5px_rgba(212,247,217,0.5)]"
              >
                <i className="fas fa-check text-[#22B14C] text-xl"></i>
              </div>
            </div>
            <h2
              id="secure-dashboard-title"
              className="text-[#111827] font-semibold text-xl mb-2 leading-tight"
            >
              Secure Your Turf Dashboard
            </h2>
            <p className="text-[#4B5563] text-base mb-6 leading-relaxed">
              To protect your turf dashboard, please enter the verification code
              sent to your email address. This extra security step helps keep
              your business information safe.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label
                htmlFor="verification-code"
                className="block text-[#374151] text-base font-normal mb-1"
              >
                Verification code
              </label>
              <div className="flex items-center space-x-2 text-[#9CA3AF] text-4xl font-light select-none">
                {[1, 2, 3, 4, 5, 6].map((num, idx) =>
                  idx === 3 ? (
                    <React.Fragment key={idx}>
                      <span className="text-3xl font-light text-[#6B7280] select-none">
                        -
                      </span>
                      <input
                        key={idx}
                        aria-label={`Verification code digit ${num}`}
                        id={`code${num}`}
                        name={`code${num}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        pattern="[0-9]*"
                        defaultValue="0"
                        className="w-14 h-14 rounded-md border border-[#D1D5DB] text-center text-4xl font-light text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#22B14C] focus:border-transparent"
                      />
                    </React.Fragment>
                  ) : (
                    <input
                      key={idx}
                      aria-label={`Verification code digit ${num}`}
                      id={`code${num}`}
                      name={`code${num}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      pattern="[0-9]*"
                      defaultValue="0"
                      className="w-14 h-14 rounded-md border border-[#D1D5DB] text-center text-4xl font-light text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#22B14C] focus:border-transparent"
                    />
                  )
                )}
              </div>
              <p className="text-base text-[#374151]">
                Didn’t get a code?{" "}
                <a
                  href="#"
                  className="underline text-[#374151] hover:text-[#22B14C]"
                >
                  Click to resend
                </a>
                .
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="w-full rounded-md border border-[#D1D5DB] py-3 text-[#111827] font-semibold hover:bg-[#F3F4F6] focus:outline-none focus:ring-2 focus:ring-[#22B14C] focus:ring-offset-1"
                >
                  Cancel
                </button>
                <Link href="/complete"> <button
                  type="submit"
                  className="w-full rounded-md bg-[#22B14C] py-3 text-white font-semibold hover:bg-[#1B8B3D] focus:outline-none focus:ring-2 focus:ring-[#22B14C] focus:ring-offset-1"
                >
                  Confirm
                </button> </Link>
              </div>
            </form>
          </section>
        </div>

        {/* Footer */}
        <footer className="text-center text-base text-[#374151] px-4 pb-8 select-none">
          <p>
            BookMyPlay uses cookies for analytics personalized content and ads.
            <br />
            By using Scale&apos;s services you agree to this use of cookies.{" "}
            <Link href="#" className="hover:text-[#22B14C] text-[#374151]">Learn more</Link>
          </p>
        </footer>
      </main>
    </>
  );
};

export default otp;