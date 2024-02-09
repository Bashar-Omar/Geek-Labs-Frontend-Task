/** @format */
import "./App.css";
import Navcontrol from "./components/Navcontrol";
import Header from "./components/header";
import Filters from "./components/Filters";

function App() {
  return (
    <div className="main mx-auto">
      <div className="container">
        <Header />
        <Navcontrol />
        <Filters />
        {/* <Dataholding /> */}
      </div>
    </div>
  );
}

export default App;
