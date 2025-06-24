import Image from "next/image";
import Logo from "../public/BMP-Logo.jpg";
import GoogleIcon from "../public/google-icon.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main
        className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center relative px-2 sm:px-4"
        style={{ backgroundImage: "url('/bg-img.jpg')" }}
      >
        <div className="w-full max-w-[95vw] sm:max-w-md md:max-w-lg lg:max-w-xl m-0 sm:my-24 bg-white bg-opacity-90 rounded-xl shadow-lg p-4 sm:p-10">
          <Image src={Logo} alt="Logo Image" className="mx-auto mb-6 sm:mb-10 w-20 h-20 sm:w-24 sm:h-24 object-contain" />
          <div className="text-start mb-4 sm:mb-6 font-inter">
            <div className="font-semibold text-xl sm:text-3xl leading-7 sm:leading-8 text-[#101828] pb-[2px]">
              Sign in
            </div>
            <p className="font-normal text-sm sm:text-base leading-5 sm:leading-6 tracking-normal text-[#667085]">
              Welcome back! Please enter your details.
            </p>
          </div>
          <form className="font-inter">
            <div className="mb-3 sm:mb-4">
              <label
                htmlFor="email"
                className="font-medium text-sm leading-5 tracking-normal"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full h-[42px] rounded-lg border border-gray-300 pt-2.5 pr-3.5 pb-2.5 pl-3.5 mt-1 text-sm"
              />
            </div>
            <div className="mb-3 sm:mb-4">
              <label
                htmlFor="password"
                className="font-medium text-sm leading-5 tracking-normal"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                className="w-full h-[42px] rounded-lg border border-gray-300 pt-2.5 pr-3.5 pb-2.5 pl-3.5 mt-1 text-sm"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-4 font-inter font-medium mt-3 sm:mt-4 gap-2">
              <div className="flex items-center">
                <input type="checkbox" id="remember-me" className="mr-2" />
                <label htmlFor="remember-me" className="text-xs sm:text-sm">
                  Remember for 30 days
                </label>
              </div>
              <Link href="#" className="text-[#344054] text-xs sm:text-sm mt-2 sm:mt-0">
                Forgot password?
              </Link>
            </div>

            <div className="mb-3 sm:mb-4">
              <Link href="/on-boarding">
                <button
                  type="submit"
                  className="w-full bg-btncolor text-white py-2 rounded-[8px] mb-3 sm:mb-4 font-semibold text-base"
                >
                  Sign in
                </button>
              </Link>
              <button
                type="button"
                className="w-full border flex items-center justify-center py-2 rounded font-semibold text-base"
              >
                <Image
                  src={GoogleIcon}
                  alt="Google"
                  width={22}
                  height={22}
                  className="mr-2"
                />
                Sign in with Google
              </button>
            </div>
          </form>
          <div className="text-center mt-4 sm:mt-6">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link href="#" className="text-[#344054] font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* cookies text moved outside, centered at bottom */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 text-center text-[10px] sm:text-xs text-gray-500 w-[95vw] max-w-lg font-inter font-semibold leading-tight tracking-normal px-1 sm:px-2">
          <p>
            BookMyPlay uses cookies for analytics personalized content and ads.
            <br />
            By using Scale's services you agree to this use of cookies.{" "}
            <Link href="#" className="underline">
              Learn more
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}