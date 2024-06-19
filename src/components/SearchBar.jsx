import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = searchText.split(" ").join("+");
    if (searchQuery) {
      let url = `https://www.google.com/search?q=${searchQuery}`;
      window.location.href = url;
    }
  };

  return (
    <div className=" mt-10  w-9/12 md:w-[45%] relative">
      <form onSubmit={handleSearch}>
        <Input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search..."
          className="text-xl px-4 pl-14 py-5 pb-6 w-full"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-1/2 left-2 -translate-y-1/2"
          type="submit"
        >
          <Search />
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
