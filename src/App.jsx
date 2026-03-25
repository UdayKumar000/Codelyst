import './App.css';
import Home from "./componants/Home.jsx";
import Chart from './componants/QuadrantChart.jsx';
import GetStarted from './componants/GetStarted.jsx';
import AnalysisPage from './componants/AnalysisPage.jsx';
import VideoPage from './componants/VideoPage.jsx';
import ArchitecturePage from './componants/ArchitecturePage.jsx';
import QuadrantPage from './componants/QuadrantPage.jsx';
import RadarPage from './componants/RadarPage.jsx';
import AboutUs from './componants/AboutUs.jsx';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './componants/Layout.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Shared Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<GetStarted />} /> {/* default route */}
          <Route path="about" element={<AboutUs />} />
          <Route path="project/:projectId" element={<AnalysisPage />} />
          <Route path="analysis/:projectId/video" element={<VideoPage />} />
          <Route path="analysis/:projectId/architecture" element={<ArchitecturePage />} />
          <Route path="analysis/:projectId/quadrant" element={<QuadrantPage />} />
          <Route path="analysis/:projectId/radar" element={<RadarPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;