import React from 'react'
interface ScheduleRow {
    startTime: string;
    endTime: string;
    days: number[]; // values for MON–SUN
  }
  
  const scheduleData: ScheduleRow[] = [
    {
      startTime: "10.30 AM",
      endTime: "11 AM",
      days: [3000, 3000, 3000, 3000, 3000, 4000, 4000],
    },
    {
      startTime: "10.30 AM",
      endTime: "11 AM",
      days: [3000, 3000, 3000, 3000, 3000, 4000, 4000],
    },
    {
      startTime: "10.30 AM",
      endTime: "11 AM",
      days: [3000, 3000, 3000, 3000, 3000, 4000, 4000],
    },
    {
      startTime: "10.30 AM",
      endTime: "11 AM",
      days: [3000, 3000, 3000, 3000, 3000, 4000, 4000],
    },
  ];
  

const schedule = () => {
    const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  return (<>
  <div className="bg-white p-4 overflow-x-auto mx-auto max-w-7xl">
          <table className="w-full border-spacing-2 border-separate">
            <thead>
              <tr className="text-green-600 text-sm font-normal">
          <th>
            <div
              className=" w-[140px] h-[44px] flex items-center gap-1 border border-green-600 rounded-md px-4 py-1.5 select-none"
            >
              <i className="far fa-clock"></i> Start Time
            </div>
          </th>
          <th>
            <div
              className="flex items-center gap-1 border border-green-600 rounded-md px-4 py-1.5 select-none"
              style={{ width: 140, height: 44 }}
            >
              <i className="far fa-clock"></i> End Time
            </div>
          </th>
          {weekDays.map((day) => (
            <th key={day}>
              <div className=" w-[120px] h-[44px] border border-green-600 rounded-md px-6 py-1.5 text-green-600 text-sm font-normal select-none text-center">
          {day}
              </div>
            </th>
          ))}
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-normal">
              {scheduleData.map((row, index) => (
          <tr key={index}>
            <td>
              <div
          className="flex items-center gap-1 border border-gray-300 rounded-md px-4 py-1.5 select-none"
          style={{ width: 140, height: 44 }}
              >
          <i className="far fa-clock"></i> {row.startTime}
              </div>
            </td>
            <td>
              <div
          className="flex items-center gap-1 border border-gray-300 rounded-md px-4 py-1.5 select-none"
          style={{ width: 140, height: 44 }}
              >
          <i className="far fa-clock"></i> {row.endTime}
              </div>
            </td>
            {row.days.map((value, i) => (
              <td key={i}>
          <div
            className=" w-[120px] h-[44px] border border-gray-300 rounded-md px-6 py-1.5 select-none text-center"
          >
            {value}
          </div>
              </td>
            ))}
          </tr>
              ))}
            </tbody>
          </table>
        </div>
  </>
  )
}

export default schedule