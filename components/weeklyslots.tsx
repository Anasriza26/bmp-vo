import CommonHeader from "./common/CommonHeader";
import ScheduleTable, { ScheduleDay, TimeSlot } from "./common/ScheduleTable";
import { Button } from "./ui/button";

const days: ScheduleDay[] = [
  { number: "", day: "Mon" },
  { number: "", day: "Tue" },
  { number: "", day: "Wed" },
  { number: "", day: "Thu" },
  { number: "", day: "Fri" },
  { number: "", day: "Sat" },
  { number: "", day: "Sun" },
];

const timeSlots: TimeSlot[] = Array(10)
  .fill(null)
  .map(() => ({
    startTime: "10.30 AM",
    endTime: "11 AM",
    prices: [3000, 3000, 3000, 3000, 3000, 3000, 3000],
  }));

export const WeeklySlots = () => {
  return (
    <>
      <div className="flex flex-col">
        <CommonHeader
          title="Manage Weekly Rate & Availability"
          subtitle="Configure your regular weekly availability and set different rates for weekdays and weekends."
        />

        <div className="p-4">
          <ScheduleTable days={days} timeSlots={timeSlots} />
        </div>

        <div className="flex justify-end">
          <Button
            className="w-[150px] h-[44px] bg-green-500 text-white mr-[150px]"
            variant="outline"
          >
            Confirm
          </Button>
        </div>
      </div>
    </>
  );
};
