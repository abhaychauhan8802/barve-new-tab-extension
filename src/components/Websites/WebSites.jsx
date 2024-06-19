import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";

const getFromLocalStorage = () => {
  let storedData = localStorage.getItem("siteData");
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};

const WebSites = () => {
  const [webSitesData, setWebSitesData] = React.useState(getFromLocalStorage());
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 720px)" });

  const handleResize = () => {
    setCurrentWidth(window.innerWidth);
  };

  useEffect(() => {
    localStorage.setItem("siteData", JSON.stringify(webSitesData));
  }, [webSitesData]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center mt-10 w-full">
      <div className="w-2/3 flex flex-wrap gap-3 justify-center">
        {webSitesData.map((website, idx) => (
          <div
            key={idx}
            className="flex justify-center items-center"
            style={
              isDesktop
                ? {
                    width: (0.66 * currentWidth - 12 * 9) / 9,
                  }
                : isTablet
                ? { width: (0.66 * currentWidth - 12 * 6) / 6 }
                : { width: (0.66 * currentWidth - 12 * 4) / 4 }
            }
          >
            <Button
              variant="ghost"
              onClick={() => {
                window.location.href = `https://${website.url}`;
              }}
              className="overflow-hidden hover:border-[1px] rounded-xl w-24 h-24 flex flex-col justify-center items-center px-2 md:px-4"
            >
              <div className="bg-white border-[1px] p-[2px] rounded-xl">
                <img
                  src={website.img}
                  alt="favicon"
                  className="w-10 rounded-lg selector"
                />
              </div>
              <p className="pt-2 text-xs text-foreground select-none over px-2 whitespace-nowrap">
                {website.name.length <= 10
                  ? website.name.slice(0, 10)
                  : website.name.slice(0, 10) + "..."}
              </p>
            </Button>
          </div>
        ))}

        <div
          className="flex justify-center items-center"
          style={
            isDesktop
              ? {
                  width: (0.66 * currentWidth - 12 * 9) / 9,
                }
              : isTablet
              ? { width: (0.66 * currentWidth - 12 * 6) / 6 }
              : { width: (0.66 * currentWidth - 12 * 4) / 4 }
          }
        >
          <Button
            variant="ghost"
            onClick={() => console.log("Click")}
            className="overflow-hidden hover:border-[1px] rounded-xl w-24 h-24 flex flex-col justify-center items-center px-2 md:px-4"
          >
            <div className="bg-white border-[1px] p-[2px] rounded-xl">
              <div className="w-10 h-10 text-2xl flex justify-center items-center">
                {<Plus className="dark:text-background" />}
              </div>
            </div>
            <p className="pt-2 text-xs px-2 whitespace-nowrap">Add site</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WebSites;
