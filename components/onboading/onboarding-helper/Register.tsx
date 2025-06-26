"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, Phone, Lock } from "lucide-react";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^[0-9]{10,15}$/;
    return re.test(phone);
  };

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Clear error when user starts typing
    if (errors[id as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [id]: "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { ...errors };

    // Validate First Name
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      valid = false;
    }

    // Validate Last Name
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      valid = false;
    }

    // Validate Email
    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    // Validate Phone
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (10-15 digits)";
      valid = false;
    }

    // Validate Password
    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (!validatePassword(formData.password)) {
      newErrors.password = "Password must be at least 8 characters";
      valid = false;
    }

    // Validate Confirm Password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
      valid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Proceed with form submission
      console.log("Form is valid, submitting...", formData);
      // Navigate to next page
      router.push("/turf-details");
    }
  };

  return (
    <>
      <div className="flex justify-center mt-[40px]">
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full"
          onSubmit={handleSubmit}
          noValidate
        >
          {/* First Name */}
          <div className="relative">
            <label
              htmlFor="firstName"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <User className="absolute left-3 top-[42px] transform -translate-y-1/2 text-gray-400 w-[18px] h-[18px]" />
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div className="relative">
            <label
              htmlFor="lastName"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <User className="absolute left-3 top-[42px] transform -translate-y-1/2 text-gray-400 w-[18px] h-[18px]" />
            <input
              id="lastName"
              type="text"
              placeholder="Last Name"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <Mail className="absolute left-3 top-[42px] transform -translate-y-1/2 text-gray-400 w-[18px] h-[18px]" />
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="relative">
            <label
              htmlFor="phone"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <Phone className="absolute left-3 top-[42px] transform -translate-y-1/2 text-gray-400 w-[18px] h-[18px]" />
            <input
              id="phone"
              type="tel"
              placeholder="Phone Number"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Lock className="absolute left-3 top-[42px] transform -translate-y-1/2 text-gray-400 w-[18px] h-[18px]" />
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label
              htmlFor="confirmPassword"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <Lock className="absolute left-3 top-[42px] transform -translate-y-1/2 text-gray-400 w-[18px] h-[18px]" />
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <div className="relative">
            <p>
              {" "}
              Already have an account?
              <Link
                href="/"
                className="text-btncolor hover:underline pl-2 font-semibold"
              >
                Sign in
              </Link>
            </p>
          </div>

          <div className="relative">
            <button
              type="submit"
              className="w-full pl-10 pr-4 py-2 border-spacing-1 bg-btncolor text-white rounded-lg cursor-pointer font-semibold"
            >
              Proceed to next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}