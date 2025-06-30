import React from "react";
import ProgressStepper from "../progress-stepper/Progress";
import Register from "../onboading/onboarding-helper/Register";
import CommonLogo from "../common/CommonLogo";

const ownerdetails = () => {
  return (
    <>
      <main>
        <CommonLogo />

        <div className="font-semibold mt-2">
          <ProgressStepper
            currentStep={2}
            steps={[
              { label: "Account Setup" },
              { label: "Turf Information" },
              { label: "Business Details" },
              { label: "Scheduling & Rates" },
              { label: "Payment & Completion" },
            ]}
          />
        </div>

        <div className="justify-center items-center flex flex-col md:mt-8 mt-4">
          <h2 className="font-semibold md:text-2xl font-inter text-center text-xl">
            Tell us about yourself
          </h2>
          <p className="font-normal text-[#667085] mt-1 text-center md:text-[14px] text-8px ">
            Help us get to know you better. This information will be used for{" "}
            account creation and communication purposes.
          </p>
        </div>

        <Register/>
            

      </main>
    </>
  );
};

export default ownerdetails;