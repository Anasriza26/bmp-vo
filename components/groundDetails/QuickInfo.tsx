import { Card, CardContent } from "@/components/ui/card";

const QuickInfo = () => (
  <Card>
    <CardContent className="p-6">
      <h4 className="font-semibold text-gray-900 mb-4">Quick Info</h4>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between"><span>Surface Type:</span><span>Artificial Turf</span></div>
        <div className="flex justify-between"><span>Capacity:</span><span>10-12 Players</span></div>
        <div className="flex justify-between"><span>Lighting:</span><span>LED Floodlights</span></div>
        <div className="flex justify-between"><span>Open Hours:</span><span>6 AM - 11 PM</span></div>
      </div>
    </CardContent>
  </Card>
);

export default QuickInfo;
