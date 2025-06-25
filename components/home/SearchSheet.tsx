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
        <SheetContent side="bottom">
          <SheetHeader className="max-w-xl mx-auto">
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
