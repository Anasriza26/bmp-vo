'use client'

import React from 'react'
import { Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

// Interfaces
export interface ScheduleDay {
  number: string
  day: string
  isHighlighted?: boolean
}

export interface TimeSlot {
  startTime: string
  endTime: string
  prices: number[]
}

// Props interface
interface ScheduleTableProps {
  days: ScheduleDay[]
  timeSlots: TimeSlot[]
  className?: string
}

const ScheduleTable: React.FC<ScheduleTableProps> = ({ days, timeSlots, className }) => {
  return (
    <div className={cn('w-full overflow-x-auto', className)}>
      <div className="min-w-max">
        {/* Header row with time labels and days */}
        <div className="flex">
          {/* Fixed time label columns */}
          <div className="flex space-x-2 mr-2">
            <div className="w-[140px] px-4 py-2 rounded-md border border-gray-200 bg-white flex items-center">
              <Clock className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-green-500 font-medium">Start Time</span>
            </div>
            <div className="w-[140px] px-4 py-2 rounded-md border border-gray-200 bg-white flex items-center">
              <Clock className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-green-500 font-medium">End Time</span>
            </div>
          </div>

          {/* Day columns */}
          <div className="flex space-x-2">
            {days.map((day, index) => (
              <div
                key={index}
                className={cn(
                  'w-[140px] px-4 py-2 rounded-md border border-gray-200 flex items-center justify-center',
                  day.isHighlighted ? 'bg-green-500 text-white' : 'bg-white text-gray-700'
                )}
              >
                <span className="font-medium">
                  {day.number} - {day.day}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Time slots rows */}
        {timeSlots.map((slot, rowIndex) => (
          <div key={rowIndex} className="flex mt-2">
            {/* Fixed time columns */}
            <div className="flex space-x-2 mr-2">
              <div className="w-[140px] px-4 py-2 rounded-md border border-gray-200 bg-white flex items-center">
                <Clock className="w-5 h-5 text-gray-500 mr-2" />
                <span className="text-gray-700">{slot.startTime}</span>
              </div>
              <div className="w-[140px] px-4 py-2 rounded-md border border-gray-200 bg-white flex items-center">
                <Clock className="w-5 h-5 text-gray-500 mr-2" />
                <span className="text-gray-700">{slot.endTime}</span>
              </div>
            </div>

            {/* Price cells for each day */}
            <div className="flex space-x-2">
              {slot.prices.map((price, dayIndex) => (
                <div
                  key={dayIndex}
                  className={cn(
                    'w-[140px] px-4 py-2 rounded-md border border-gray-200 flex items-center justify-center',
                    days[dayIndex]?.isHighlighted ? 'bg-gray-500 text-white' : 'bg-white text-gray-700'
                  )}
                >
                  <span>{price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScheduleTable
