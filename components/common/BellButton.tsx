import {
  Bell
} from "lucide-react"
import { Button } from "@/components/ui/button"

const BellButton = () => {
  return (
    <>
      <Button variant="ghost" size="icon">
        <Bell className="w-5 h-5" />
      </Button>
    </>
  );
};

export default BellButton;
