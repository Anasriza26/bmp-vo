import React from 'react'
import Image from 'next/image'
import Logo from "@/public/BMP-Logo.jpg";
import SuccessImg from "@/components/assets/Success.jpg";
import Link from 'next/link';

const complete = () => {
  return (<>
  <main>
    <div className="mt-[60px] ml-[60px]">
      <Link href={"/on-boarding"} className="flex items-center">
      <Image src={Logo} alt="Owner Details" width={133} height={42} />
      </Link>
          
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <Image
          alt="verification Img"
          className="mt-[-120px]"
          src={SuccessImg}
          width={400}
          height={400}
        />
        <h1 className="mt-3 font-semibold text-gray-900 text-2xl leading-tight">
          You're all set!
        </h1>
        <p className="mt-1  text-gray-500 text-base leading-relaxed">
          Congratulations! Your turf is now ready to accept bookings. Review <br /> your details or proceed to your dashboard.
        </p>

        <button
  type="button"
  className=" bg-green-600 hover:bg-green-700 text-white font-semibold text-base rounded-md px-6 py-2 mt-1"
>
  <span className="w-5 h-5 border-2 border-white rounded-full">
    <i className="fas fa-circle"></i>
  </span>
  <span className="ml-2">Access Dashboard</span>
</button>
      </div>


    
    

  </main>
  </>
  )
}

export default complete