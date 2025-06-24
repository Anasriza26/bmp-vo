"use client";

import { useState } from "react";
import { MapPin, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

interface BookingSlot {
  id: string;
  date: string;
  time: string;
  price: number;
}

const BookingOverview = () => {
  const [bookingSlots, setBookingSlots] = useState<BookingSlot[]>([
    { id: "1", date: "2024.10.23", time: "11:00 AM", price: 2500 },
    { id: "2", date: "2024.10.23", time: "07:00 PM", price: 3500 },
  ]);

  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const removeSlot = (id: string) => {
    setBookingSlots((slots) => slots.filter((slot) => slot.id !== id));
  };

  const total = bookingSlots.reduce((sum, slot) => sum + slot.price, 0);
  const discount = 500;
  const subtotal = total - discount;
  return (
    <>
      <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Booking Overview
            </h1>
          </div>

          {/* Venue Information */}
          <Card className="mb-6 md:mb-8">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-lg md:text-xl font-semibold text-green-600 mb-2">
                    Futsal Prime - FD
                  </h2>
                  <div className="flex items-center text-gray-600 text-sm md:text-base">
                    <MapPin className="w-4 h-4 mr-1" />
                    Puttalam, Sri Lanka
                  </div>
                </div>
                <div className="flex items-center bg-gray-100 px-2 py-1 rounded">
                  <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                  <span className="text-sm font-medium">4.5</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Booking Slots */}
          <div className="space-y-4 mb-6 md:mb-8">
            {bookingSlots.map((slot) => (
              <Card key={slot.id} className="relative">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-gray-600 text-sm md:text-base">
                        {slot.date}
                      </div>
                      <div className="bg-green-600 text-white px-3 py-1 rounded text-sm md:text-base font-medium">
                        {slot.time}
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-green-600 font-semibold text-lg md:text-xl">
                        LKR {slot.price.toLocaleString()}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeSlot(slot.id)}
                        className="text-gray-400 hover:text-gray-600 p-1"
                      >
                        <X className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing Summary */}
          <Card className="mb-6 md:mb-8">
            <CardContent className="p-4 md:p-6 space-y-4">
              <div className="flex justify-between items-center text-base md:text-lg">
                <span className="font-medium text-gray-900">Total</span>
                <span className="font-semibold">LKR {total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between items-center text-base md:text-lg">
                <span className="font-medium text-red-600">Discount</span>
                <span className="font-semibold text-red-600">
                  LKR {discount.toFixed(2)}
                </span>
              </div>

              <hr className="border-gray-200" />

              <div className="flex justify-between items-center text-lg md:text-xl">
                <span className="font-semibold text-green-600">Sub Total</span>
                <span className="font-semibold text-green-600">
                  LKR {subtotal.toFixed(2)}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Terms and Conditions */}
          <div className="mb-6 md:mb-8">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="terms"
                checked={agreedToTerms}
                onCheckedChange={(checked) =>
                  setAgreedToTerms(checked as boolean)
                }
                className="mt-1"
              />
              <label
                htmlFor="terms"
                className="text-sm md:text-base text-gray-600 leading-relaxed cursor-pointer"
              >
                I agree to the Terms and Conditions, Privacy Policy, and Refund
                Policy
              </label>
            </div>
          </div>

          {/* Payment Button */}
          <div className="sticky bottom-4 md:static">
            <Link href="/payment-success">
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 md:py-4 text-base md:text-lg font-semibold rounded-lg"
                disabled={!agreedToTerms || bookingSlots.length === 0}
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>Pay with</span>
                  <span className="font-semibold">PayHere</span>
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingOverview;
