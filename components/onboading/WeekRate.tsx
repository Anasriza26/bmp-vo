import React from "react";
import Logo from "../assets/BMP-Logo.jpg";
import Image from "next/image";
import ProgressStepper from "../progress-stepper/Progress";
import Schedule from "../onboading/onboarding-helper/Schedule"
import Link from "next/link";

const Weekrate = () => {
  return (
    <>
      <main>
        <div className="mt-[60px] ml-[60px]">
          <Image src={Logo} alt="Owner Details" width={133} height={42} />
        </div>

        <div className="font-semibold">
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

        <div className="justify-center items-center flex flex-col mt-[40px]">
          <h2 className="font-semibold text-2xl font-inter text-center">
            Setup weekly rate & availability
          </h2>
          <p className="font-normal text-[#667085] mt-[10px] text-center">
            Configure your regular weekly availability and set different <br />{" "}
            rates for weekdays and weekends.
          </p>
        </div>

        <Schedule/>

       

        <div className="max-w-7xl mx-auto p-4 space-y-10 mt-[100px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
            <div className="relative">
              <button
                type="button"
                className="w-full border rounded-md py-2 text-btncolor border-btncolor "
              >
                Back
              </button>
            </div>
            <div>
              <div className="relative">
                {/* Placeholder for additional content or input */}
              </div>
            </div>
            <div>
              <Link href="/payment-details"><button
                type="button"
                className="w-full border border-gray-300 rounded-md py-2 text-white bg-btncolor"
              >
                Next
              </button></Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Weekrate;