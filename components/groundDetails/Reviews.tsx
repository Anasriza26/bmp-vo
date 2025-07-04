import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import Link from "next/link";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

const Reviews = ({ reviews }: { reviews: Review[] }) => (
  <div>
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-sm font-semibold text-gray-900">Reviews & Ratings</h3>
      <Link href="/" className="text-xs text-gray-600 underline">
        see more
      </Link>
    </div>
    <div className="space-y-4">
      {reviews.map((review) => (
        <Card key={review.id} className="border-2 p-2 ">
          <CardContent className="">
            <div className="flex items-start pl-1 pt-1">
              <Avatar className="h-8 w-8">
                <AvatarImage src={review.avatar} alt={review.name} />
                <AvatarFallback>
                  {review.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 items-center mt-2">
                <div className="flex  justify-between mb-2 mx-2">
                  <h4 className="font-semibold text-primary text-sm">
                    {review.name}
                  </h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < review.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                {/* <p className="text-gray-600 text-sm text-start">{review.comment}</p> */}
              </div>
            </div>
            <p className="text-gray-600 text-sm text-left mx-3 text-regular">
              {review.comment}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default Reviews;
