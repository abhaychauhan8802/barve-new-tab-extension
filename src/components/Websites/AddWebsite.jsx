import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

const AddWebsite = ({ webSitesData, setWebSitesData }) => {
  const [siteName, setSiteName] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (siteName && siteUrl) {
      const siteUrlWithoutProtocol = siteUrl.replace(
        /^https?:\/\/(www\.)?/,
        ""
      );
      const newSite = {
        name: siteName,
        url: siteUrlWithoutProtocol,
        // img: `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${siteUrlWithoutProtocol}/&size=64`,
        img: `https://www.google.com/s2/favicons?domain=${siteUrlWithoutProtocol}&sz=64`,
      };

      setWebSitesData([...webSitesData, newSite]);
      setSiteName("");
      setSiteUrl("");
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="overflow-hidden hover:border-[1px] rounded-xl w-24 h-24 flex flex-col justify-center items-center px-2 md:px-4"
        >
          <div className="bg-white border-[1px] p-[2px] rounded-xl">
            <div className="w-10 h-10 text-2xl flex justify-center items-center">
              {<Plus className="dark:text-background" />}
            </div>
          </div>
          <p className="pt-2 text-xs px-2 whitespace-nowrap ">Add site</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[300px]">
        <form
          className="w-full h-full flex flex-col gap-2 "
          onSubmit={handleSubmit}
        >
          <DialogHeader>
            <DialogTitle>Add Website</DialogTitle>
            <DialogDescription>Add a new website shortcut</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-col items-start gap-4">
              <Label className="text-right">Name</Label>
              <Input
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                placeholder="example"
                className="col-span-3"
              />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label className="text-right">Url</Label>
              <Input
                value={siteUrl}
                onChange={(e) => setSiteUrl(e.target.value)}
                placeholder="example.com"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddWebsite;
