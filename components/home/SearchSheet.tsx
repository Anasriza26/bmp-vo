import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SearchButton from "./SearchButton";
import Search from "../players/Search";

const SearchSheet = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <SearchButton />
        </SheetTrigger>
        <SheetContent side="bottom" className="overflow-y-auto max-h-[90vh]">
          <SheetHeader className="w-full md:px-6">
            <SheetTitle>Plan your play</SheetTitle>
            <SheetDescription>
              By providing the sport, time and date you will be get the filtered
              grounds.
            </SheetDescription>
          </SheetHeader>
          <Search />
          <SheetFooter>
            {/* <Button type="submit">Save changes</Button> */}
            {/* <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose> */}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SearchSheet;
