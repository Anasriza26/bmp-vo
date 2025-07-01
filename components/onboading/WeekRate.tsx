import React from "react";
import ProgressStepper from "../progress-stepper/Progress";
import Schedule from "../onboading/onboarding-helper/Schedule"
import Link from "next/link";
import CommonLogo from "../common/CommonLogo";

const Weekrate = () => {
  const isFormValid = () => {
    return true; // or your validation condition
  };

  return (
    <>
      <main>
        <CommonLogo />

        <div className="font-semibold mt-2">
          <ProgressStepper
            currentStep={5}
            steps={[
              { label: "Account Setup" },
              { label: "Turf Information" },
              { label: "Business Details" },
              { label: "Scheduling & Rates" },
              { label: "Payment & Completion" },
            ]}
          />
        </div>

        <div className="justify-center items-center flex flex-col mt-4">
          <h2 className="font-semibold text-xl font-inter text-center md:text-2xl">
            Setup weekly rate & availability
          </h2>
          <p className="font-normal text-[#667085] mt-1 text-center md:text-[14px] text-8px">
            Configure your regular weekly availability and set different {" "}
            rates for weekdays and weekends.
          </p>
        </div>

        <Schedule/>

       

        <div className="max-w-6xl mx-auto p-4 space-y-6 mt-1">
        <div className="flex flex-row sm:grid sm:grid-cols-3 gap-4">
          {/* Back Button */}
          <div className="flex-1">
            <button
              type="button"
              className="w-full border rounded-md py-2 text-btncolor border-btncolor"
            >
              Back
            </button>
          </div>

          {/* Placeholder for Center */}
          <div className="hidden sm:block">
            <div className="relative"></div>
          </div>

          {/* Next Button */}
          <div className="flex-1">
            {isFormValid() ? (
              <Link href="/payment-details">
                <button
                  type="button"
                  className="w-full border border-gray-300 rounded-md py-2 text-white bg-btncolor"
                >
                  Next
                </button>
              </Link>
            ) : (
              <button
                type="button"
                disabled
                className="w-full border border-gray-300 rounded-md py-2 text-white bg-btncolor opacity-50 cursor-not-allowed"
                title="Please fill all required fields"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
      </main>
    </>
  );
};

export default Weekrate;