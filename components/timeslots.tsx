import CommonHeader from "./common/CommonHeader";
import { Clock } from "lucide-react";

export const TimeSlots = () => {
  return (
    <>
      <div className="flex flex-col">
        <CommonHeader
          title="Manage Time Slots"
          subtitle="Define when your facility is open for bookings and set your base pricing structure."
        />

        <div className="flex p-4">
          <div className="flex space-x-4 ">
            <div className="w-[140px] px-4 py-2 rounded-md border border-gray-200 bg-white flex items-center">
              <Clock className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-green-500 font-medium">Start Time</span>
            </div>
            <div className="w-[140px] px-4 py-2 rounded-md border border-gray-200 bg-white flex items-center">
              <Clock className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-green-500 font-medium">End Time</span>
            </div>
          </div>
          <div className=" ml-24 w-[100px] px-2 py-2 rounded-md border border-gray-200 bg-green-500 flex items-center justify-center">
            <span className="text-white font-medium">Add</span>
          </div>
        </div>

        <div className="flex p-4">
          <div className="flex space-x-4 ">
            <div className="w-[140px] px-4 py-2 rounded-md border border-gray-200 bg-white flex items-center">
              <Clock className="w-5 h-5 text-grey-500 mr-3" />
              <span className="text-grey-500 font-medium">10:00</span>
            </div>
            <div className="w-[140px] px-4 py-2 rounded-md border border-gray-200 bg-white flex items-center">
              <Clock className="w-5 h-5 text-grey-500 mr-3" />
              <span className="text-grey-500 font-medium"> 11:00</span>
            </div>
          </div>
          <div className=" ml-24 w-[100px] px-2 py-2 rounded-md border border-red-300 bg-white flex items-center justify-center">
            <span className=" text-red-500 font-semibold">Delete</span>
          </div>
        </div>
      </div>
    </>
  );
};
