import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Pencil, Trash } from "lucide-react";
import EditWebsite from "./EditWebsite";

const WebSiteOptions = ({
  website,
  idx,
  handleDelete,
  webSitesData,
  setWebSitesData,
}) => {
  return (
    <div className="absolute top-0 right-0 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Pencil className="w-[1rem] h-[1rem]" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <EditWebsite
            website={website}
            idx={idx}
            webSitesData={webSitesData}
            setWebSitesData={setWebSitesData}
          />
          <DropdownMenuItem onClick={() => handleDelete(website)}>
            <Trash className="w-[0.9rem] h-[0.9rem] mr-3" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default WebSiteOptions;
