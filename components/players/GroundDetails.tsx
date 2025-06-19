import HeroImage from "@/components/groundDetails/HeroImage";
import FacilityInfo from "@/components/groundDetails/FacilityInfo";
import Amenities from "@/components/groundDetails/Amenities";
import Description from "@/components/groundDetails/Description";
import Reviews from "@/components/groundDetails/Reviews";
import BookingSidebar from "@/components/groundDetails/BookingSidebar";
import QuickInfo from "@/components/groundDetails/QuickInfo";
import { Users, Droplets, Car, Eye, Heart } from "lucide-react";

// dummy data moved to page level
const GroundDetails = () => {
  const amenities = [
    { icon: Users, label: "5 Futsal Balls" },
    { icon: Users, label: "Washrooms" },
    { icon: Droplets, label: "Free Drinking Water" },
    { icon: Car, label: "Parking" },
    { icon: Eye, label: "CCTV Operation" },
    { icon: Heart, label: "First Aid Kit" },
  ];

  const reviews = [
    {
      id: 1,
      name: "Riza Anas",
      avatar: "public/User.jpg",
      rating: 4,
      comment: "Great experience worth for the price, Highly recommended.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <HeroImage />
            <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
              <FacilityInfo />
              <Amenities amenities={amenities} />
              <Description />
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Reviews reviews={reviews} />
            </div>
          </div>
          <div className="lg:col-span-1 sticky top-8 space-y-6">
            <BookingSidebar />
            <QuickInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroundDetails;
