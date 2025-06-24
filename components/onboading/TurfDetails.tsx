import React from "react";
import Logo from "../assets/BMP-Logo.jpg";
import Image from "next/image";
import ProgressStepper from "../progress-stepper/Progress";
import List from "../onboading/onboarding-helper/List";
const turfdetails = () => {
  return (
    <>
      <main>
        <div className="mt-[60px] ml-[60px]">
          <Image src={Logo} alt="Owner Details" width={133} height={42} />
        </div>

        <div className="font-semibold">
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

        <div className="justify-center items-center flex flex-col mt-[40px]">
          <h2 className="font-semibold text-2xl font-inter text-center">
          Let&apos;s set up your turf
          </h2>
          <p className="font-normal text-[#667085] mt-[10px] text-center">
          Share the basic details about your sports facility, including its name, <br />location, and the types of sports supported.
          </p>
        </div>

        <List/>



      </main>
    </>
  );
};

export default turfdetails;