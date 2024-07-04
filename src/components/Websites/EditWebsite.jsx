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
import { Pencil } from "lucide-react";

const EditWebsite = ({ webSitesData, setWebSitesData, website, idx }) => {
  const [siteName, setSiteName] = useState(website.name);
  const [siteUrl, setSiteUrl] = useState(website.url);
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (siteName && siteUrl) {
      const siteUrlWithoutProtocol = siteUrl.replace(
        /^https?:\/\/(www\.)?/,
        ""
      );

      (updateItems = () => {
        const copy = [...webSitesData];
        copy.splice(idx, 1, {
          name: siteName,
          url: siteUrlWithoutProtocol,
          img: `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${siteUrlWithoutProtocol}/&size=64`,
        });
        setWebSitesData(copy);
      })();

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
          className="w-full justify-start font-normal px-2"
        >
          <Pencil className="w-[0.9rem] h-[0.9rem] mr-3" />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[300px]">
        <form
          className="w-full h-full flex flex-col gap-2"
          onSubmit={handleSubmit}
        >
          <DialogHeader>
            <DialogTitle>Edit Website</DialogTitle>
            <DialogDescription>
              Edit your website name and url
            </DialogDescription>
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
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditWebsite;
