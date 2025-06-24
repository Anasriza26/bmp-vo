import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/BMP-Logo.jpg";
import ProgressStepper from "../progress-stepper/Progress";

const ownerdocumentation = () => {
  return (
    <>
      <main>
        <div className="mt-[60px] ml-[60px]">
          <Image src={Logo} alt="Owner documentation" width={133} height={42} />
        </div>

        <div className="font-semibold">
          <ProgressStepper
            currentStep={4}
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
            Submit your ownership documents
          </h2>
          <p className="font-normal text-[#667085] mt-[10px] text-center">
            Provide your business registration details and ownership <br />
            documentation for legal compliance.
          </p>
        </div>

        <div className="flex justify-center mt-[40px]">
          <form
            action="#"
            className="space-y-6 w-full max-w-2xl"
            encType="multipart/form-data"
            method="POST"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* NIC Front */}
              <div>
                <label
                  className="block text-gray-700 text-sm font-normal mb-2"
                  htmlFor="nic-front"
                >
                  NIC Front
                </label>
                <label
                  htmlFor="nic-front"
                  className="relative flex flex-col items-center justify-center border border-gray-200 rounded-lg cursor-pointer hover:border-green-600 transition-colors bg-white h-32"
                >
                  <input
                    accept=".jpg,.jpeg,.png"
                    className="sr-only"
                    id="nic-front"
                    name="nic-front"
                    type="file"
                  />
                  <div className="flex flex-col items-center justify-center text-center text-gray-400">
                    <div className="mb-2 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <i className="fas fa-cloud-upload-alt text-gray-400"></i>
                    </div>
                    <span className="text-green-600 font-semibold text-sm">
                      Click to upload
                    </span>
                    <span className="text-gray-500 text-xs mt-1">
                      or drag and drop
                    </span>
                    <span className="text-gray-400 text-xs mt-1">
                      JPEG, PNG, JPG (max. 800×400px)
                    </span>
                  </div>
                </label>
              </div>

              {/* NIC Back */}
              <div>
                <label
                  className="block text-gray-700 text-sm font-normal mb-2"
                  htmlFor="nic-back"
                >
                  NIC Back
                </label>
                <label
                  htmlFor="nic-back"
                  className="relative flex flex-col items-center justify-center border border-gray-200 rounded-lg cursor-pointer hover:border-green-600 transition-colors bg-white h-32"
                >
                  <input
                    accept=".jpg,.jpeg,.png"
                    className="sr-only"
                    id="nic-back"
                    name="nic-back"
                    type="file"
                  />
                  <div className="flex flex-col items-center justify-center text-center text-gray-400">
                    <div className="mb-2 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <i className="fas fa-cloud-upload-alt text-gray-400"></i>
                    </div>
                    <span className="text-green-600 font-semibold text-sm">
                      Click to upload
                    </span>
                    <span className="text-gray-500 text-xs mt-1">
                      or drag and drop
                    </span>
                    <span className="text-gray-400 text-xs mt-1">
                      JPEG, PNG, JPG (max. 800×400px)
                    </span>
                  </div>
                </label>
              </div>
            </div>

            {/* Business Registration Document */}
            <div>
              <label
                className="block text-gray-700 text-sm font-normal mb-2"
                htmlFor="business-registration"
              >
                Business Registration Document
              </label>
              <label
                htmlFor="business-registration"
                className="relative flex flex-col items-center justify-center border border-gray-200 rounded-lg cursor-pointer hover:border-green-600 transition-colors bg-white h-32"
              >
                <input
                  accept=".jpg,.jpeg,.png"
                  className="sr-only"
                  id="business-registration"
                  name="business-registration"
                  type="file"
                />
                <div className="flex flex-col items-center justify-center text-center text-gray-400">
                  <div className="mb-2 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <i className="fas fa-cloud-upload-alt text-gray-400"></i>
                  </div>
                  <span className="text-green-600 font-semibold text-sm">
                    Click to upload
                  </span>
                  <span className="text-gray-500 text-xs mt-1">
                    or drag and drop
                  </span>
                  <span className="text-gray-400 text-xs mt-1">
                    JPEG, PNG, JPG (max. 800×400px)
                  </span>
                </div>
              </label>
            </div>

            <div className="flex items-center space-x-2 text-gray-600 text-sm mt-6">
              <input
                className="w-4 h-4 border border-gray-300 rounded text-green-600 focus:ring-green-500"
                id="agree"
                name="agree"
                type="checkbox"
              />
              <label className="select-none" htmlFor="agree">
                I agree to the{" "}
                <Link
                  className="text-gray-700 underline hover:text-green-600 transition-colors"
                  href="#"
                >
                  Terms &amp; Conditions
                </Link>
              </label>
            </div>
          </form>
        </div>

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
              <Link href="/time-slot"><button
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

export default ownerdocumentation;