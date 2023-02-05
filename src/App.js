import "./App.scss";
import { useEffect, useState } from "react";
import HomePage from "./pages/home-page/home-page.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./pages/Navigation/navigation.component";
import AboutUsPage from "./pages/about us page/about-us-page.component";
import IdeaPage from "./pages/Ideas page/ideapage.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="aboutus" element={<AboutUsPage />} />
        <Route path="ideas" element={<IdeaPage />} />
      </Route>
    </Routes>
  );
};

export default App;
