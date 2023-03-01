import "./App.scss";
import "./styles/core.scss";
import "./styles/animations.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { lazy, Suspense } from "react";

/* Lazy load sub pages */
const HomePage = lazy(() => import("./pages/HomePage"));
const ExperienceDetailPage = lazy(() => import("./pages/ExperienceDetailPage"));
const Overlay = lazy(() => import("./ambient/overlay/Overlay"));
const VoidArea = lazy(() => import("./ambient/overlay/VoidArea"));

function App() {
  return (
    <div className="app-container">
      <Suspense>
        <Overlay />
        <VoidArea />
        <div className="app-container content-safe-area">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home/*" element={<HomePage />} />
            <Route
              path="/experience/:jobSlug"
              element={<ExperienceDetailPage />}
            />
            <Route path="/projects/:projectSlug" element={<h1>Parked</h1>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
