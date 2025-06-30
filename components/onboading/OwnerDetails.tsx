import React from "react";
import Image from "next/image";
import Logo from "../assets/BMP-Logo.jpg";
import ProgressStepper from "../progress-stepper/Progress";
import Register from "../onboading/onboarding-helper/Register";

const ownerdetails = () => {
  return (
    <>
      <main>
        <div className="mt-[20px] ml-[20px] lg:ml-6 md:ml-4 md:mt-[40px] ">
          <Image src={Logo} alt="Owner Details" className="w-[60px] h-[20px] lg:w-[100px] lg:h-[32px] md:w-[80px] md:h-[22px]" />
        </div>

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