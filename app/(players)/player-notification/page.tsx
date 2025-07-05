import { ArrowLeft, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const page = () => {
  const notifications = [
    {
      id: 1,
      type: "Booking Confirmation",
      time: "9:45 AM",
      title: "New Booking ID: #123",
      description: "Your booking at Trattoria turf is confirmed.",
      hasIndicator: true,
    },
    {
      id: 2,
      type: "System Notification",
      time: "8:00 AM",
      title: "",
      description: "A new update is available for the app.",
      hasIndicator: false,
    },
    {
      id: 3,
      type: "System Notification",
      time: "7:00 AM",
      title: "Scheduled Maintenance",
      description: "Maintenance scheduled for tonight.",
      hasIndicator: false,
    },
    {
      id: 4,
      type: "Booking Cancellation",
      time: "9:45 AM",
      title: "Booking ID: #123",
      description: "Your booking at Trattoria turf has been cancelled.",
      hasIndicator: true,
    },
  ];
  return (
    <>
      <div className="min-h-screen bg-white max-w-3xl md:mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-gray-100"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <Trash2 className="h-5 w-5" />
          </Button>
        </div>

        {/* Title */}
        <div className="px-4 pb-2">
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
        </div>

        {/* Notifications List */}
        <div className="px-4">
          {notifications.map((notification, index) => (
            <div
              key={notification.id}
              className={`py-4 ${
                index !== notifications.length - 1
                  ? "border-b border-gray-100"
                  : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {notification.hasIndicator && (
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    )}
                    <span className="text-base font-semibold text-gray-900">
                      {notification.title || notification.type}
                    </span>
                  </div>
                  {notification.title && (
                    <div className="text-sm font-medium text-gray-900 mb-1 ml-4">
                      {notification.type}
                    </div>
                  )}
                  <p className="text-sm text-gray-500 ml-4">
                    {notification.description}
                  </p>
                </div>
                <span className="text-sm text-gray-400 ml-4">
                  {notification.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
