import React from "react";
import ModeToggle from "./ModeToggle";
import { Grip } from "lucide-react";
import { Settings } from "lucide-react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <>
      <div className="flex p-4 justify-between items-center">
        <div>
          <Button variant="ghost" size="icon">
            <Grip className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </div>
        <div className="flex gap-2 items-center">
          <ModeToggle />
          <Button variant="ghost" size="icon">
            <Settings className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
