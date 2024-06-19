import React, { useState } from "react";
import ThemeProvider from "./components/theme-provider";
import Header from "./components/Header/Header";
import SearchLogo from "./components/SearchLogo";
import SearchBar from "./components/SearchBar";
import WebSites from "./components/Websites/WebSites";

const App = () => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="w-screen h-screen">
      <ThemeProvider>
        <Header isEdit={isEdit} setIsEdit={setIsEdit} />
        <div className="w-full mt-16 md:mt-20 lg:mt-24 flex flex-col items-center">
          <SearchLogo />
          <SearchBar />
          <WebSites isEdit={isEdit} />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
