'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link';

const BankDetails = () => {

  
      const fileInputRef = useRef<HTMLInputElement | null>(null);
    
      const [formData, setFormData] = useState({
        accountHolder: "John Doe",
        nic: "200112700021",
        bankName: "",
        branchName: "Puttalam",
        branchCode: "XXXXXXXX",
        accountNumber: "XXXXXXXX",
      });
    
      const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleClick = () => {
        if (fileInputRef.current) {
          fileInputRef.current.click();
        }
      };
    
      const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
          const file = e.target.files[0];
          console.log("Selected file:", file);
          // Handle file upload or preview here
        }
      };

  return (<>
  <main>
  <div className="bg-white px-4 mt-[30px]">
          <form className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <label
                htmlFor="accountHolder"
                className="block text-sm text-gray-700 mb-1"
              >
                Account Holder’s Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <i className="fas fa-user"></i>
                </span>
                <input
                  type="text"
                  id="accountHolder"
                  name="accountHolder"
                  value={formData.accountHolder}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="nic" className="block text-sm text-gray-700 mb-1">
                NIC
              </label>
              <input
                type="text"
                id="nic"
                name="nic"
                value={formData.nic}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="bankName"
                className="block text-sm text-gray-700 mb-1"
              >
                Bank Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <i className="fas fa-university"></i>
                </span>
                <select
                  id="bankName"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-8 text-gray-700 appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" disabled>
                    Select your bank
                  </option>
                  <option value="Bank 1">Bank 1</option>
                  <option value="Bank 2">Bank 2</option>
                  <option value="Bank 3">Bank 3</option>
                </select>
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                  <i className="fas fa-chevron-down"></i>
                </span>
              </div>
            </div>

            <div>
              <label
                htmlFor="branchName"
                className="block text-sm text-gray-700 mb-1"
              >
                Branch Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <input
                  type="text"
                  id="branchName"
                  name="branchName"
                  value={formData.branchName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="branchCode"
                className="block text-sm text-gray-700 mb-1"
              >
                Branch Code
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <input
                  type="text"
                  id="branchCode"
                  name="branchCode"
                  value={formData.branchCode}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="accountNumber"
                className="block text-sm text-gray-700 mb-1"
              >
                Bank Account Number
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <input
                  type="text"
                  id="accountNumber"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <h2 className="text-gray-800 text-base font-normal mb-1">
                Bank Statement
              </h2>
              <div
                className="border border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer h-[100px]"
                onClick={handleClick}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                    const file = e.dataTransfer.files[0];
                    console.log("Dropped file:", file);
                    // Handle file upload or preview here
                  }
                }}
              >
                <div className="bg-gray-100 rounded-full p-2">
                  <i className="fas fa-cloud-upload-alt text-gray-500 text-lg"></i>
                </div>
                <p className="text-green-600 font-semibold text-sm mt-1">
                  Click to upload
                  <span className="font-normal text-gray-600">
                    {" "}
                    or drag and drop
                  </span>
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  JPEG, PNG, JPG (max. 800×400px)
                </p>
                <input
                  type="file"
                  accept="image/jpeg, image/png, image/jpg"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
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
              <Link href="/otp"><button
                type="button"
                className="w-full border border-gray-300 rounded-md py-2 text-white bg-btncolor"
              >
                Proceed
              </button></Link>
            </div>
          </div>
        </div>
  </main>
  </>
  )
}

export default BankDetails