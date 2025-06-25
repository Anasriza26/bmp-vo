"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Key, Upload, User } from "lucide-react";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "Anas Riza",
    phone: "+94 75 412 1698",
    email: "rizanas0526rz@gmail.com",
    password: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  return (
    <>
      <div className="min-h-screen bg-white p-4 md:p-8">
        <div className="max-w-md mx-auto md:max-w-2xl lg:max-w-4xl">
          <Card className="border-none shadow-none  bg-white">
            <CardHeader className="px-0 md:px-6">
              <CardTitle className="text-2xl md:text-3xl font-semibold text-gray-900">
                Personal info
              </CardTitle>
              <CardDescription className="text-gray-600 md:text-base">
                Update your photo and personal details here.
              </CardDescription>
            </CardHeader>

            <CardContent className="px-0 md:px-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700"
                    >
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className="h-12 border-gray-200 focus:border-gray-300 focus:ring-0"
                    />
                  </div>

                  {/* Phone Number Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="h-12 border-gray-200 focus:border-gray-300 focus:ring-0"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="h-12 pl-10 border-gray-200 focus:border-gray-300 focus:ring-0"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="password"
                      className="text-sm font-medium text-gray-700"
                    >
                      Password
                    </Label>
                    <div className="relative">
                      <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={(e) =>
                          handleInputChange("password", e.target.value)
                        }
                        className="h-12 pl-10 border-gray-200 focus:border-gray-300 focus:ring-0"
                      />
                    </div>
                  </div>
                </div>

                {/* Profile Photo Section */}
                <div className="space-y-6 md:pl-6">
                  <div className="flex justify-start md:justify-start">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/User.jpg" alt="Profile photo" />
                      <AvatarFallback>
                        <User className="h-8 w-8" />
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Upload Area */}
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-gray-300 transition-colors cursor-pointer">
                    <Upload className="mx-auto h-8 w-8 text-gray-400 mb-4" />
                    <div className="space-y-2">
                      <p className="text-sm">
                        <span className="text-green-600 font-medium">
                          Click to upload
                        </span>
                        <span className="text-gray-600"> or drag and drop</span>
                      </p>
                      <p className="text-xs text-gray-500">
                        SVG, PNG, JPG or GIF (max. 800×400px)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <Link href={"/home"}>
                <div className="flex flex-col-reverse sm:flex-row gap-3 pt-6 border-t border-gray-100">
                  <Button
                    variant="outline"
                    className="flex-1 sm:flex-none h-11 bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                  >
                    Cancel
                  </Button>

                  <Button className="flex-1 sm:flex-none h-11 bg-green-600 hover:bg-green-700 text-white">
                    Save changes
                  </Button>
                </div>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Profile;
