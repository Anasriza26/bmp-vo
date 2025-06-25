import HeroImage from "@/components/groundDetails/HeroImage";
import FacilityInfo from "@/components/groundDetails/FacilityInfo";
import Amenities from "@/components/groundDetails/Amenities";
import Description from "@/components/groundDetails/Description";
import Reviews from "@/components/groundDetails/Reviews";
import { Users, Droplets, Car, Eye, Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { venues } from "@/constants/data";
import { notFound } from "next/navigation";

// dummy data moved to page level
const GroundDetails = ({ id }: { id: number }) => {
  console.log("GroundDetails data:", id);

  const venue = venues.find((venue) => venue.id === Number(id));
  console.log(venue ? "Venue found:" : "Venue not found for ID:", venue || id);

  if (!venue) {
    return notFound();
  }

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
      avatar: "/User.jpg",
      rating: 4,
      comment: "Great experience worth for the price, Highly recommended.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto  py-8">
        <div className="space-y-6">
          <HeroImage src={venue.image} alt={venue.name} />

          <div className="bg-white px-4  space-y-6">
            <FacilityInfo
              name={venue.name}
              location={venue.location}
              rating={venue.rating}
            />
            <Amenities amenities={venue.features as any} />
            <Description />
            <Reviews reviews={reviews} />
          </div>
          <Link href={`/make-booking`} className="p-4 block">
            <Button className=" bg-green-600 text-white  text-lg w-full">
              Book Slots
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GroundDetails;
