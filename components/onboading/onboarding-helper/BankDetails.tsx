'use client'

import React, { useRef, useState } from 'react'
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { User, IdCard, Banknote, MapPin, Barcode, CreditCard, UploadCloud, CheckCircle, ChevronDown } from 'lucide-react';

const BankDetails = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    accountHolder: "",
    nic: "",
    bankName: "",
    branchName: "",
    branchCode: "",
    accountNumber: "",
  });

  const [errors, setErrors] = useState({
    accountHolder: false,
    nic: false,
    bankName: false,
    branchName: false,
    branchCode: false,
    accountNumber: false,
    bankStatement: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: false });
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setUploadedFile(file);

      if (errors.bankStatement) {
        setErrors({ ...errors, bankStatement: false });
      }
    }
  };

  const validateForm = () => {
    const newErrors = {
      accountHolder: !formData.accountHolder.trim(),
      nic: !formData.nic.trim(),
      bankName: !formData.bankName,
      branchName: !formData.branchName.trim(),
      branchCode: !formData.branchCode.trim(),
      accountNumber: !formData.accountNumber.trim(),
      bankStatement: !uploadedFile,
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleProceed = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      const firstErrorField = Object.keys(errors).find(key => 
        errors[key as keyof typeof errors]
      );
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField === 'bankStatement' ? 'bank-statement-section' : firstErrorField);
        element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return false;
    }
    window.location.href = '/onboarding-otp';
  };

  const isFormValid = () => {
    return formData.accountHolder.trim() &&
      formData.nic.trim() &&
      formData.bankName &&
      formData.branchName.trim() &&
      formData.branchCode.trim() &&
      formData.accountNumber.trim() &&
      uploadedFile;
  };

  return (
    <main>
      <div className="bg-white px-4 mt-4 mx-4 md:mt-8">
        <form className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">

          {/* Account Holder */}
          <div>
            <label htmlFor="accountHolder" className="block text-sm text-gray-700 mb-1">Account Holder's Name</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <User className="w-4 h-4" />
              </span>
              <Input
                id="accountHolder"
                name="accountHolder"
                placeholder="Riza"
                value={formData.accountHolder}
                onChange={handleChange}
                className={`w-full border rounded-md py-2 pl-10 pr-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 ${
                  errors.accountHolder
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-green-600'
                }`}
              />
            </div>
            {errors.accountHolder && <p className="text-red-500 text-xs mt-1">Account holder's name is required</p>}
          </div>

          {/* NIC */}
          <div>
            <label htmlFor="nic" className="block text-sm text-gray-700 mb-1">NIC</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <IdCard className="w-4 h-4" />
              </span>
              <Input
                id="nic"
                name="nic"
                placeholder="200615796787"
                value={formData.nic}
                onChange={handleChange}
                className={`w-full border rounded-md py-2 pl-10 pr-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 ${
                  errors.nic
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-green-600'
                }`}
              />
            </div>
            {errors.nic && <p className="text-red-500 text-xs mt-1">NIC is required</p>}
          </div>

          {/* Bank Name */}
          <div>
            <label htmlFor="bankName" className="block text-sm text-gray-700 mb-1">Bank Name</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Banknote className="w-4 h-4" />
              </span>
              <select
                id="bankName"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                className={`w-full border rounded-md py-2 pl-10 pr-8 text-gray-700 appearance-none focus:outline-none focus:ring-1 ${
                  errors.bankName
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-green-600'
                }`}
              >
                <option value="" disabled>Select your bank</option>
                <option value="Bank 1">Bank 1</option>
                <option value="Bank 2">Bank 2</option>
                <option value="Bank 3">Bank 3</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <ChevronDown className="w-4 h-4" />
              </span>
            </div>
            {errors.bankName && <p className="text-red-500 text-xs mt-1">Please select a bank</p>}
          </div>

          {/* Branch Name */}
          <div>
            <label htmlFor="branchName" className="block text-sm text-gray-700 mb-1">Branch Name</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <MapPin className="w-4 h-4" />
              </span>
              <Input
                id="branchName"
                name="branchName"
                value={formData.branchName}
                onChange={handleChange}
                className={`w-full border rounded-md py-2 pl-10 pr-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 ${
                  errors.branchName
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-green-600'
                }`}
              />
            </div>
            {errors.branchName && <p className="text-red-500 text-xs mt-1">Branch name is required</p>}
          </div>

          {/* Branch Code */}
          <div>
            <label htmlFor="branchCode" className="block text-sm text-gray-700 mb-1">Branch Code</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Barcode className="w-4 h-4" />
              </span>
              <Input
                id="branchCode"
                name="branchCode"
                value={formData.branchCode}
                onChange={handleChange}
                className={`w-full border rounded-md py-2 pl-10 pr-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 ${
                  errors.branchCode
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-green-600'
                }`}
              />
            </div>
            {errors.branchCode && <p className="text-red-500 text-xs mt-1">Branch code is required</p>}
          </div>

          {/* Account Number */}
          <div>
            <label htmlFor="accountNumber" className="block text-sm text-gray-700 mb-1">Bank Account Number</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <CreditCard className="w-4 h-4" />
              </span>
              <Input
                id="accountNumber"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                className={`w-full border rounded-md py-2 pl-10 pr-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 ${
                  errors.accountNumber
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-green-600'
                }`}
              />
            </div>
            {errors.accountNumber && <p className="text-red-500 text-xs mt-1">Account number is required</p>}
          </div>

          {/* Upload Bank Statement */}
          <div className="sm:col-span-2" id="bank-statement-section">
            <h2 className="text-gray-800 text-base font-normal mb-1">Bank Statement</h2>
            <div
              className={`border rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer h-[100px] ${
                errors.bankStatement
                  ? 'border-red-500 bg-red-50'
                  : uploadedFile
                  ? 'border-green-600 bg-green-50'
                  : 'border-gray-300'
              }`}
              onClick={handleClick}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                  const file = e.dataTransfer.files[0];
                  setUploadedFile(file);
                  if (errors.bankStatement) {
                    setErrors({ ...errors, bankStatement: false });
                  }
                }
              }}
            >
              <div className={`rounded-full p-2 ${uploadedFile ? 'bg-green-100' : 'bg-gray-100'}`}>
                {uploadedFile ? (
                  <CheckCircle className="text-green-600 w-5 h-5" />
                ) : (
                  <UploadCloud className="text-gray-500 w-5 h-5" />
                )}
              </div>
              <p className={`font-semibold text-sm mt-1 ${uploadedFile ? 'text-green-600' : 'text-green-600'}`}>
                {uploadedFile ? `Uploaded: ${uploadedFile.name}` : 'Click to upload'}
                {!uploadedFile && (
                  <span className="font-normal text-gray-600"> or drag and drop</span>
                )}
              </p>
              {!uploadedFile && (
                <p className="text-gray-500 text-xs mt-1">JPEG, PNG, JPG (max. 800×400px)</p>
              )}
              <input
                type="file"
                accept="image/jpeg, image/png, image/jpg"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            {errors.bankStatement && <p className="text-red-500 text-xs mt-1">Please upload a bank statement</p>}
          </div>

        </form>
      </div>

      {/* Buttons */}
      <div className="max-w-6xl mx-auto p-4 space-y-6 mt-1">
        <div className="flex flex-row sm:grid sm:grid-cols-3 gap-4">
          <div className="flex-1">
            <button
              type="button"
              className="w-full border rounded-md py-2 text-btncolor border-btncolor"
            >
              Back
            </button>
          </div>
          <div className='hidden sm:block'>
            <div className="relative"></div>
          </div>
          <div className='flex-1'>
            <button
              type="button"
              onClick={handleProceed}
              disabled={!isFormValid()}
              className={`w-full border border-gray-300 rounded-md py-2 text-white transition-all duration-200 ${
                isFormValid() 
                  ? 'bg-btncolor hover:bg-opacity-90 cursor-pointer' 
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default BankDetails;
