import React from "react";
import Image from "next/image";
import Logo from "../assets/BMP-Logo.jpg";
import ProgressStepper from "../progress-stepper/Progress";
import Register from "../onboading/onboarding-helper/Register";

const ownerdetails = () => {
  return (
    <>
      <main>
        <div className="mt-[60px] ml-[60px]">
          <Image src={Logo} alt="Owner Details" width={133} height={42} />
        </div>

        <div className="font-semibold">
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

        <div className="justify-center items-center flex flex-col mt-[40px]">
          <h2 className="font-semibold text-2xl font-inter text-center">
            Tell us about yourself
          </h2>
          <p className="font-normal text-[#667085] mt-[10px] text-center">
            Help us get to know you better. This information will be used for{" "}
            <br />
            account creation and communication purposes.
          </p>
        </div>

        <Register/>
            

      </main>
    </>
  );
};

export default ownerdetails;