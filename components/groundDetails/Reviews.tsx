import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

const Reviews = ({ reviews }: { reviews: Review[] }) => (
  <div>
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-xl font-semibold text-gray-900">Reviews & Ratings</h3>
    </div>
    <div className="space-y-4">
      {reviews.map((review) => (
        <Card key={review.id} className="border-0 bg-gray-50">
          <CardContent className="p-4">
            <div className="flex items-start space-x-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={review.avatar} alt={review.name} />
                <AvatarFallback>
                  {review.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{review.comment}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default Reviews;
