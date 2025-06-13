import CommonHeader from "./common/CommonHeader";
import ScheduleTable, { ScheduleDay, TimeSlot } from "./common/ScheduleTable";

const days: ScheduleDay[] = [
  { number: "23", day: "WED" },
  { number: "24", day: "THU" },
  { number: "25", day: "FRI", isHighlighted: true },
  { number: "26", day: "SAT" },
  { number: "27", day: "SUN" },
  { number: "28", day: "MON" },
];

const timeSlots: TimeSlot[] = Array(10)
  .fill(null)
  .map(() => ({
    startTime: "10.30 AM",
    endTime: "11 AM",
    prices: [3000, 3000, 3000, 3000, 3000, 4000],
  }));

export const SlotsPage = () => {
  return (
    <>
      <div className="flex flex-col">
        <CommonHeader
          title="Manage Slot Rate & Availability"
          subtitle="Fine-tune pricing for specific time slots and manage peak hour rates."
        />

        <div className="p-4">
          <ScheduleTable days={days} timeSlots={timeSlots} />
        </div>
      </div>
    </>
  );
};
