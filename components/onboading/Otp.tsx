"use client";

import React from "react";
import Image from "next/image";
import bgImage from "@/components/assets/bg-img.jpg";
import Link from "next/link";
import CommonLogo from "../common/CommonLogo";
import CommonFooter from "../common/CommonFooter";

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

        <CommonLogo />

{/* flex-grow flex justify-center items-center px-4 */}
        <div className="flex justify-center items-center min-h-[calc(100vh-10px)] px-4 mt-2 md:min-h-[calc(100vh-96px)]">
          <section
            aria-labelledby="secure-dashboard-title"
            className="bg-white rounded-xl shadow-lg max-w-2xl w-full p-4 sm:p-8"
            role="region"
          >
            <div className="flex items-center justify-start mb-2">
              <Image
                src={"/assets/icons/Featuredicon.svg"}
                alt="icon"
                width={48}
                height={48}
              />
            </div>

            <h2
              id="secure-dashboard-title"
              className="text-[#111827] font-semibold text-lg mb-1 leading-tight sm:text-left md:text-2xl"
            >
              Secure Your Turf Dashboard
            </h2>

            <p className="text-[#4B5563] text-xs mb-2 leading-relaxed sm:text-left md:text-base">
              To protect your turf dashboard, please enter the verification code
              sent to your email address. This extra security step helps keep
              your business information safe.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <label
                htmlFor="verification-code"
                className="block text-[#374151] md:text-lg  mb-1 text-base font-semibold"
              >
                Verification code
              </label>

              <div className="flex flex-wrap sm:justify-start items-center gap-2">
                {[1, 2, 3, 4, 5, 6].map((num, idx) =>
                  idx === 3 ? (
                    <React.Fragment key={idx}>
                      <span className="text-2xl sm:text-3xl font-light text-[#6B7280] select-none">
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
                        defaultValue=""
                        className="w-8 h-8 sm:w-14 sm:h-14 rounded-md border border-[#D1D5DB] text-center text-3xl sm:text-4xl font-light text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#22B14C] focus:border-transparent"
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
                      defaultValue=""
                      className="w-8 h-8 sm:w-14 sm:h-14 rounded-md border border-[#D1D5DB] text-center text-3xl sm:text-4xl font-light text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#22B14C] focus:border-transparent"
                    />
                  )
                )}
              </div>

              <p className="text-xs text-[#374151]">
                Didn’t get a code?{" "}
                <a
                  href="#"
                  className="underline text-[#374151] hover:text-[#22B14C]"
                >
                  Click to resend
                </a>
                .
              </p>

              <div className="mt-2 grid grid-cols-2 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  className="w-full rounded-md border border-[#D1D5DB] py-3 text-[#111827] font-semibold hover:bg-[#F3F4F6] focus:outline-none focus:ring-2 focus:ring-[#22B14C] focus:ring-offset-1"
                >
                  Cancel
                </button>

                <Link href="/complete">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-[#22B14C] py-3 text-white font-semibold hover:bg-[#1B8B3D] focus:outline-none focus:ring-2 focus:ring-[#22B14C] focus:ring-offset-1"
                  >
                    Confirm
                  </button>
                </Link>
              </div>
            </form>
          </section>
        </div>

        {/* Footer */}
        <CommonFooter />
      </main>
    </>
  );
};

export default otp;
