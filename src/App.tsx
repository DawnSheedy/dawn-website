import "./App.css";
import { Overlay } from "./ambient/overlay/Overlay";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";
import { VoidArea } from "./ambient/overlay/VoidArea";
import { ExperienceDetailPage } from "./pages/ExperienceDetailPage";

function App() {
  return (
    <div className="app-container">
      <Overlay />
      <VoidArea />
      <div className="app-container content-safe-area">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home/*" element={<HomePage />} />
          <Route path="/experience/:jobSlug" element={<ExperienceDetailPage />} />
          <Route path="/projects/:projectSlug" element={<h1>Parked</h1>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
