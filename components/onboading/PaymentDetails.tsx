import React from "react";
import ProgressStepper from "../progress-stepper/Progress";
import BankDetails from "../onboading/onboarding-helper/BankDetails";
import CommonLogo from "../common/CommonLogo";

const PaymentDetails = () => {


  // Removed unused BankStatementUpload component to resolve the error

  return (
    <>
      <main>
        <CommonLogo />

        <div className="font-semibold mt-2">
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

        <div className="justify-center items-center flex flex-col md:mt-8 mt-4">
          <h2 className="font-semibold md:text-2xl text-xl font-inter text-center">
            Submit your bank details
          </h2>
          <p className="font-normal text-[#667085] mt-1 text-center md:text-[14px] text-8px">
            Add your bank account information to receive booking payments
            securely.
          </p>
        </div>

        <BankDetails/>

        
      </main>
    </>
  );
};

export default PaymentDetails;