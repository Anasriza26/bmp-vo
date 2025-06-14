import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

interface CommonCardProps {
  title: string;
  value: string | number;
  valueColor?: string;
  titleColor?: string;
  subtitle?: string;
  subtitleIcon?: React.ElementType | null;
  subtitleColor?: string;
}

const CommonCard = ({
  title,
  titleColor = "text-red-600",
  value,
  valueColor = "text-gray-900",
  subtitle,
  subtitleIcon: SubtitleIcon = null,
  subtitleColor = "text-gray-500",
}: CommonCardProps) => {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">
            {title}
          </CardTitle>
          <Button variant="ghost" size="icon" className="w-4 h-4">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className={`text-3xl font-bold ${valueColor}`}>{value}</div>
          {subtitle && (
            <div className={`flex items-center text-sm mt-2 ${subtitleColor}`}>
              {SubtitleIcon && <SubtitleIcon className="w-4 h-4 mr-1" />}
              {subtitle}
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default CommonCard;
