import "./App.scss";
import HomePage from "./pages/home-page/home-page.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./pages/Navigation/navigation.component";
import AboutUsPage from "./pages/about us page/about-us-page.component";
import IdeaPage from "./pages/Ideas page/ideapage.component";
import Projects from "./pages/Projects page/projects.component";
import Impact from "./pages/Impact page/impact.component";
import HireTalent from "./pages/Hire Talent/hire-talent.component";
import Fyp from "./pages/Fyp page/fyp.component";
import IdeaList from "./pages/ideaList page/idealist.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="aboutus" element={<AboutUsPage />} />
        <Route path="ideas" element={<IdeaPage />} />
        <Route path="projects" element={<Projects />} />
        <Route path="impact" element={<Impact />} />
        <Route path="hiretalent" element={<HireTalent />} />
        <Route path="fyp" element={<Fyp />} />
      </Route>
    </Routes>
  );
};

export default App;
