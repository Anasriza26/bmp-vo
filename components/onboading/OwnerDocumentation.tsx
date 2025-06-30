"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/BMP-Logo.jpg";
import ProgressStepper from "../progress-stepper/Progress";
import CommonLogo from "../common/CommonLogo";

type FormField = "nicFront" | "nicBack" | "businessRegistration";
type FormData = {
  nicFront: File | null;
  nicBack: File | null;
  businessRegistration: File | null;
  agreeTerms: boolean;
};
type Errors = {
  nicFront?: string;
  nicBack?: string;
  businessRegistration?: string;
  agreeTerms?: string;
};
type FileNames = {
  nicFront: string;
  nicBack: string;
  businessRegistration: string;
};

const ownerdocumentation = () => {
  const [formData, setFormData] = useState<FormData>({
    nicFront: null,
    nicBack: null,
    businessRegistration: null,
    agreeTerms: false,
  });

  const [errors, setErrors] = useState<Errors>({});
  const [fileNames, setFileNames] = useState<FileNames>({
    nicFront: "",
    nicBack: "",
    businessRegistration: "",
  });

  // File validation function
  const validateFile = (file: File): string | null => {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type)) {
      return "Please upload only JPEG, JPG, or PNG files";
    }

    if (file.size > maxSize) {
      return "File size should not exceed 5MB";
    }

    return null;
  };

  // Handle file uploads
  const handleFileUpload = (fieldName: FormField, file: File | undefined) => {
    if (!file) return;

    const validationError = validateFile(file);
    if (validationError) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: validationError,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [fieldName]: file,
    }));

    setFileNames((prev) => ({
      ...prev,
      [fieldName]: file.name,
    }));

    // Clear error for this field
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[fieldName];
      return newErrors;
    });
  };

  // Handle checkbox change
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      agreeTerms: checked,
    }));

    if (checked) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.agreeTerms;
        return newErrors;
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors: Errors = {};

    if (!formData.nicFront) {
      newErrors.nicFront = "NIC Front image is required";
    }

    if (!formData.nicBack) {
      newErrors.nicBack = "NIC Back image is required";
    }

    // if (!formData.businessRegistration) {
    //   newErrors.businessRegistration = 'Business Registration Document is required';
    // }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the Terms & Conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle next button click
  const handleNext = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed to next page
      console.log("Form is valid, proceeding to next page");
      // You can redirect here or handle the form submission
      window.location.href = "/time-slot";
    }
  };

  // Render file upload component
  const renderFileUpload = (
    fieldName: FormField,
    label: string,
    id: string
  ) => {
    const hasFile = formData[fieldName];
    const hasError = errors[fieldName];

    return (
      <div>
        <label
          className="block text-gray-700 text-sm font-normal mb-2"
          htmlFor={id}
        >
          {label} <span className="text-red-500">*</span>
        </label>
        <label
          htmlFor={id}
          className={`relative flex flex-col items-center justify-center border rounded-lg cursor-pointer transition-colors bg-white h-32 ${
            hasError
              ? "border-red-500 hover:border-red-600"
              : hasFile
              ? "border-green-500 hover:border-green-600"
              : "border-gray-200 hover:border-green-600"
          }`}
        >
          <input
            accept=".jpg,.jpeg,.png"
            className="sr-only"
            id={id}
            name={id}
            type="file"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const files = e.target.files;
              handleFileUpload(fieldName, files ? files[0] : undefined);
            }}
          />
          <div className="flex flex-col items-center justify-center text-center text-gray-400">
            {hasFile ? (
              <>
                <div className="mb-2 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <i className="fas fa-check text-green-600"></i>
                </div>
                <span className="text-green-600 font-semibold text-sm">
                  {fileNames[fieldName]}
                </span>
                <span className="text-gray-500 text-xs mt-1">
                  Click to change file
                </span>
              </>
            ) : (
              <>
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
                  JPEG, PNG, JPG (max. 5MB)
                </span>
              </>
            )}
          </div>
        </label>
        {hasError && <p className="text-red-500 text-xs mt-1">{hasError}</p>}
      </div>
    );
  };

  // Helper to check if form is valid for enabling the Next button
  const isFormValid = () => {
    return (
      !!formData.nicFront &&
      !!formData.nicBack &&
      !!formData.businessRegistration &&
      !!formData.agreeTerms &&
      Object.keys(errors).length === 0
    );
  };

  return (
    <>
      <main>
        <CommonLogo />

        <div className="font-semibold mt-2">
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

        <div className="justify-center items-center flex flex-col  md:mt-8 mt-4">
          <h2 className="font-semibold md:text-2xl font-inter text-center text-xl">
            Submit your ownership documents
          </h2>
          <p className="font-normal text-[#667085] mt-1 text-center md:text-[14px] text-8px">
            Provide your business registration details and ownership
            documentation for legal compliance.
          </p>
        </div>

        <div className="flex justify-center mt-2 mx-4 md:mt-4">
          <form className="space-y-6 w-full max-w-2xl" onSubmit={handleNext}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* NIC Front */}
              {renderFileUpload("nicFront", "NIC Front", "nic-front")}

              {/* NIC Back */}
              {renderFileUpload("nicBack", "NIC Back", "nic-back")}
            </div>

            {/* Business Registration Document */}
            {renderFileUpload(
              "businessRegistration",
              "Business Registration Document",
              "business-registration"
            )}

            <div className="flex items-center space-x-2 text-gray-600 text-sm mt-6">
              <input
                className={`w-4 h-4 border rounded text-green-600 focus:ring-green-500 ${
                  errors.agreeTerms ? "border-red-500" : "border-gray-300"
                }`}
                id="agree"
                name="agree"
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={handleCheckboxChange}
              />
              <label className="select-none" htmlFor="agree">
                I agree to the{" "}
                <Link
                  className="text-gray-700 underline hover:text-green-600 transition-colors"
                  href="#"
                >
                  Terms &amp; Conditions
                </Link>
                <span className="text-red-500 ml-1">*</span>
              </label>
            </div>
            {errors.agreeTerms && (
              <p className="text-red-500 text-xs mt-1">{errors.agreeTerms}</p>
            )}
          </form>
        </div>

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

            {/* Placeholder for Center (Hidden on Mobile) */}
            <div className="hidden sm:block">
              <div className="relative">
                {/* Add something here if needed */}
              </div>
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

export default ownerdocumentation;
