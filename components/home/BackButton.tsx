import { ArrowLeft, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BackButton = () => {
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="h-10 w-10 rounded-full bg-white shadow-xl"
      >
        <ArrowLeft className="h-5 w-5" />
      </Button>
    </>
  );
};
