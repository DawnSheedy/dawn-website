import "./App.scss";
import { About } from "./content/About";
import { History } from "./content/History";
import { MainHeading } from "./content/MainHeading";

function App() {
  return (
    <div className="main-content-container">
      <MainHeading />
      <div className="body-column">
        <About />
        <History />
      </div>
    </div>
  );
}

export default App;
