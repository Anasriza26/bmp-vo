import React from "react";
import Image from "next/image";
import Logo from "@/components/assets/BMP-Logo.jpg";
import VerificationImg from "@/components/assets/Verification.jpg";
import bgImage from "@/components/assets/bg-img.jpg";

const Page = () => {
  return (
    <div className="min-h-screen  relative overflow-hidden">
      {/* Background pattern */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 "
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Logo top left */}
      <div className="mt-[60px] ml-[60px]">
        <Image src={Logo} alt="Owner Details" width={133} height={42} />
      </div>

      {/* Center content */}
      <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <Image
          alt="verification Img"
          className=""
          src={VerificationImg}
          width={380}
          height={380}
        />
        <h1 className="mt-2 font-semibold text-gray-900 text-2xl leading-tight">
          Verification is on progress
        </h1>
        <p className="mt-2  text-gray-500 text-base leading-relaxed">
          Upload required documents to verify your turf ownership and ensure{" "}
          <br /> compliance with local regulations.
        </p>
      </main>
    </div>
  );
};

export default Page;