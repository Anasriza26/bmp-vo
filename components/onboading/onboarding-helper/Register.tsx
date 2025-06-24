
import Link from "next/link";
import { User, Mail, Phone, Lock } from 'lucide-react';


export default function Register() {
  return (
    <>
      <div className="flex justify-center mt-[40px]">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
          {/* First Name */}
          <div className="relative">
            <label
              htmlFor="firstName"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <User className="absolute left-3 top-[42px] transform -translate-y-1/2 text-gray-400" />
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Last Name */}
          <div className="relative">
            <label
              htmlFor="lastName"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <User className="absolute left-3 top-[42px] transform -translate-y-1/2 text-gray-400" />
            <input
              id="lastName"
              type="text"
              placeholder="Last Name"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <Mail className="absolute left-3 top-[42px] transform -translate-y-1/2 text-gray-400" />
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div className="relative">
            <label
              htmlFor="phone"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <Phone className="absolute left-3 top-[42px] transform -translate-y-1/2 text-gray-400" />
            <input
              id="phone"
              type="tel"
              placeholder="Phone Number"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Lock className="absolute left-3 top-[42px] transform -translate-y-1/2 text-gray-400" />
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label
              htmlFor="confirmPassword"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <Lock className="absolute left-3 top-[42px] transform -translate-y-1/2 text-gray-400" />
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <p> All ready have an account?
              <Link href="/page.tsx" className="text-btncolor hover:underline pl-2 font-semibold">
                Sign in
              </Link>
            </p>
          </div>

          <div className="relative">
            <Link href="/turfdetails"><button className="w-full pl-10 pr-4 py-2 border-spacing-1 bg-btncolor text-white rounded-lg  cursor-pointer font-semibold">Proceed to next</button></Link>
          </div>
        </form>
      </div>
    </>
  );
}