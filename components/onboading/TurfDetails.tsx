import React from "react";
import ProgressStepper from "../progress-stepper/Progress";
import List from "../onboading/onboarding-helper/List";
import CommonLogo from "../common/CommonLogo";
const turfdetails = () => {
  return (
    <>
      <main>
        <CommonLogo />

        <div className="font-semibold mt-2">
          <ProgressStepper
            currentStep={3}
            steps={[
              { label: "Account Setup" },
              { label: "Turf Information" },
              { label: "Business Details" },
              { label: "Scheduling & Rates" },
              { label: "Payment & Completion" },
            ]}
          />
        </div>

        <div className="justify-center items-center flex flex-col mt-4 md:mt-8">
          <h2 className="font-semibold md:text-2xl font-inter text-center text-xl">
          Let&apos;s set up your turf
          </h2>
          <p className="font-normal text-[#667085] mt-[10px] text-center md:text-14px text-8px">
          Share the basic details about your sports facility, including its name,location, and the types of sports supported.
          </p>
        </div>

        <List/>



      </main>
    </>
  );
};

export default turfdetails;