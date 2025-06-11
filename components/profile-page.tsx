"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Lock,
  Upload,
  Building,
  MapPin,
  Hash,
  CreditCard,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CommonHeader from "./common/CommonHeader";

export function ProfilePage() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "example@mail.com",
    phoneNumber: "John Doe",
    password: "",
    confirmPassword: "",
  });

  const [bankDetails, setBankDetails] = useState({
    accountHolderName: "John Doe",
    nic: "200112700021",
    bankName: "",
    branchName: "Puttalam",
    branchCode: "xxxxxxxx",
    accountNumber: "xxxxxxxx",
  });

  const handlePersonalInfoChange = (field: string, value: string) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleBankDetailsChange = (field: string, value: string) => {
    setBankDetails((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <CommonHeader
        title="Manage Profile"
        subtitle="Define when your facility is open for bookings and set your base pricing structure."
      />

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-8">
        {/* Personal Info Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Personal info
            </CardTitle>
            <p className="text-sm text-gray-600">
              Update your photo and personal details.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="firstName"
                    value={personalInfo.firstName}
                    onChange={(e) =>
                      handlePersonalInfoChange("firstName", e.target.value)
                    }
                    className="pl-10"
                    placeholder="John"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="lastName"
                    value={personalInfo.lastName}
                    onChange={(e) =>
                      handlePersonalInfoChange("lastName", e.target.value)
                    }
                    className="pl-10"
                    placeholder="Doe"
                  />
                </div>
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="email"
                    type="email"
                    value={personalInfo.email}
                    onChange={(e) =>
                      handlePersonalInfoChange("email", e.target.value)
                    }
                    className="pl-10"
                    placeholder="example@mail.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="phoneNumber"
                    value={personalInfo.phoneNumber}
                    onChange={(e) =>
                      handlePersonalInfoChange("phoneNumber", e.target.value)
                    }
                    className="pl-10"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            </div>

            {/* Password Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="password">Update Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="password"
                    type="password"
                    value={personalInfo.password}
                    onChange={(e) =>
                      handlePersonalInfoChange("password", e.target.value)
                    }
                    className="pl-10"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={personalInfo.confirmPassword}
                    onChange={(e) =>
                      handlePersonalInfoChange(
                        "confirmPassword",
                        e.target.value
                      )
                    }
                    className="pl-10"
                    placeholder="Re Enter your password"
                  />
                </div>
              </div>
            </div>

            {/* Profile Photo Upload */}
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src="/placeholder.svg?height=80&width=80" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <Button
                  variant="link"
                  className="text-green-600 hover:text-green-700 p-0"
                >
                  Click to upload
                </Button>
                <span className="text-gray-500"> or drag and drop</span>
                <p className="text-xs text-gray-500 mt-1">
                  SVG, PNG, JPG or GIF (max. 800×400px)
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-green-600 hover:bg-green-700">
                Save changes
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Bank Details Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Bank details
            </CardTitle>
            <p className="text-sm text-gray-600">
              Update your bank account information to receive booking payments
              securely.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Account Holder and NIC */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="accountHolderName">Account Holder's Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="accountHolderName"
                    value={bankDetails.accountHolderName}
                    onChange={(e) =>
                      handleBankDetailsChange(
                        "accountHolderName",
                        e.target.value
                      )
                    }
                    className="pl-10"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="nic">NIC</Label>
                <Input
                  id="nic"
                  value={bankDetails.nic}
                  onChange={(e) =>
                    handleBankDetailsChange("nic", e.target.value)
                  }
                  placeholder="200112700021"
                />
              </div>
            </div>

            {/* Bank Name and Branch Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="bankName">Bank Name</Label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Select
                    value={bankDetails.bankName}
                    onValueChange={(value) =>
                      handleBankDetailsChange("bankName", value)
                    }
                  >
                    <SelectTrigger className="pl-10">
                      <SelectValue placeholder="Select your bank" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="commercial-bank">
                        Commercial Bank
                      </SelectItem>
                      <SelectItem value="peoples-bank">
                        People's Bank
                      </SelectItem>
                      <SelectItem value="bank-of-ceylon">
                        Bank of Ceylon
                      </SelectItem>
                      <SelectItem value="sampath-bank">Sampath Bank</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="branchName">Branch Name</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="branchName"
                    value={bankDetails.branchName}
                    onChange={(e) =>
                      handleBankDetailsChange("branchName", e.target.value)
                    }
                    className="pl-10"
                    placeholder="Puttalam"
                  />
                </div>
              </div>
            </div>

            {/* Branch Code and Account Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="branchCode">Branch Code</Label>
                <div className="relative">
                  <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="branchCode"
                    value={bankDetails.branchCode}
                    onChange={(e) =>
                      handleBankDetailsChange("branchCode", e.target.value)
                    }
                    className="pl-10"
                    placeholder="xxxxxxxx"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="accountNumber">Bank Account Number</Label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="accountNumber"
                    value={bankDetails.accountNumber}
                    onChange={(e) =>
                      handleBankDetailsChange("accountNumber", e.target.value)
                    }
                    className="pl-10"
                    placeholder="xxxxxxxx"
                  />
                </div>
              </div>
            </div>

            {/* Bank Statement Upload */}
            <div className="space-y-2">
              <Label>Bank Statement</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <div>
                  <Button
                    variant="link"
                    className="text-green-600 hover:text-green-700 p-0"
                  >
                    Click to upload
                  </Button>
                  <span className="text-gray-500"> or drag and drop</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  JPEG, PNG, JPG (max. 800×400px)
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-green-600 hover:bg-green-700">
                Save changes
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
