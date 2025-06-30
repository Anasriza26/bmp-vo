import React from "react";
import Image from "next/image";
import Logo from "../assets/BMP-Logo.jpg";


const CommonLogo = () => {
  return (
    <>
      <div className="mt-[20px] ml-[20px] lg:ml-6 md:ml-4 md:mt-[40px] ">
        <Image
          src={Logo}
          alt="Owner Details"
          className="w-[60px] h-[20px] lg:w-[100px] lg:h-[32px] md:w-[80px] md:h-[22px]"
        />
      </div>
    </>
  );
};

export default CommonLogo;
