import React from "react";
import HomePage from "./components/homePage/HomePage";
import Header from "./components/UI/Header";

const App = () => {
  const categories = [
    "პოლიტიკა",
    "საზოგადოება",
    "სამართალი",
    "ბიზნესი & ეკონომიკა",
    "ეკონომიკა",
    "რელიგია",
  ];

  return (
    <div>
      <Header
        className="header"
        companyName="Company Name"
        categories={categories}
      />
      <HomePage />
    </div>
  );
};

export default App;
