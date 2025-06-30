import React from "react";
import Image from "next/image";
import SuccessImg from "@/components/assets/Success.jpg";
import Link from "next/link";
import CommonLogo from "../common/CommonLogo";

const Complete = () => {
  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Header */}
      <div className="p-4">
        <Link href="/on-boarding" className="flex items-center">
          <CommonLogo />
        </Link>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col items-center  px-4 text-center">
        <Image
          alt="Success"
          src={SuccessImg}
          className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] mx-auto lg:w-[400px] lg:h-[400px]"
          width={400}
          height={400}
        />
        <h1 className="mt-4 font-semibold text-gray-900 text-xl md:text-2xl leading-tight">
          You're all set!
        </h1>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed w-[300px] md:w-[600px] mt-2">
          Congratulations! Your turf is now ready to accept bookings. Review your details or proceed to your dashboard.
        </p>
        <button
          type="button"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold text-base rounded-md px-6 py-2 mt-4"
        >
          Access Dashboard
        </button>
      </div>
    </main>
  );
};

export default Complete;
