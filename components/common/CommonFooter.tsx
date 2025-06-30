import Link from 'next/link'
import React from 'react'

const CommonFooter = () => {
  return (<>
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 text-center text-[8px] sm:text-xs text-gray-500 w-[95vw] max-w-lg font-regular leading-tight px-1 sm:px-2 md:text-[10px]">
        <p>
          BookMyPlay uses cookies for analytics, personalized content, and ads.
          By using BookMyPlay's services, you agree to this use of cookies.{" "}
          <Link
            href="#"
            className="underline"
            aria-label="Learn more about our cookie policy"
          >
            Learn more
          </Link>
        </p>
      </div>
  </>
  )
}

export default CommonFooter