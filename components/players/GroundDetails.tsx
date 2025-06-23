import HeroImage from "@/components/groundDetails/HeroImage";
import FacilityInfo from "@/components/groundDetails/FacilityInfo";
import Amenities from "@/components/groundDetails/Amenities";
import Description from "@/components/groundDetails/Description";
import Reviews from "@/components/groundDetails/Reviews";
import { Users, Droplets, Car, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="space-y-6">
          <HeroImage />

          <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
            <FacilityInfo />
            <Amenities amenities={amenities} />
            <Description />
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <Reviews reviews={reviews} />
          </div>
          <Button className="w-full bg-green-600 text-white py-3 text-lg">
            Book Slots
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GroundDetails;
