import React from "react";
import Image from "next/image";
import Logo from "../assets/BMP-Logo.jpg";
import ProgressStepper from "../progress-stepper/Progress";
import BankDetails from "../onboading/onboarding-helper/BankDetails";

const PaymentDetails = () => {


  // Removed unused BankStatementUpload component to resolve the error

  return (
    <>
      <main>
        <div className="mt-[60px] ml-[60px]">
          <Image src={Logo} alt="Owner Details" width={133} height={42} />
        </div>

        <div className="font-semibold">
          <ProgressStepper
            currentStep={5.5}
            steps={[
              { label: "Account Setup" },
              { label: "Turf Information" },
              { label: "Business Details" },
              { label: "Scheduling & Rates" },
              { label: "Payment & Completion" },
            ]}
          />
        </div>

        <div className="justify-center items-center flex flex-col mt-[30px]">
          <h2 className="font-semibold text-2xl font-inter text-center">
            Submit your bank details
          </h2>
          <p className="font-normal text-[#667085] mt-[10px] text-center">
            Add your bank account information to receive <br /> booking payments
            securely.
          </p>
        </div>

        <BankDetails/>

        
      </main>
    </>
  );
};

export default PaymentDetails;