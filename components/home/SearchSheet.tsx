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
          <SheetHeader className="">
            <SheetTitle className="text-xl font-semibold text-left">Plan your play</SheetTitle>
            <SheetDescription className="text-xs font-semibold text-left">
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
