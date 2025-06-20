import React from "react";
import Image from "next/image";

const Welcome = () => {
  return (
    <>
      <div className="min-h-screen bg-green-500 flex items-center justify-center p-4">
        <div className="text-center select-none">
          <Image
            src="/BookMyPlay.png"
            alt="Logo"
            width={126}
            height={40}
            className="w-[298px] h-[114px]"
          />
        </div>
      </div>
    </>
  );
};

export default Welcome;
