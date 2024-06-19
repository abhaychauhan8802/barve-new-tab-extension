import React from "react";
import ThemeProvider from "./components/theme-provider";
import Header from "./components/Header/Header";
import SearchLogo from "./components/SearchLogo";
import SearchBar from "./components/SearchBar";
import WebSites from "./components/Websites/WebSites";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <ThemeProvider>
        <Header />
        <div className="w-full mt-20 flex flex-col items-center">
          <SearchLogo />
          <SearchBar />
          <WebSites />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
