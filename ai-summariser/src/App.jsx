import Remo from "./components/Remo";
import Demo from "./components/Demo";
import "./App.css";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient"></div>
      </div>
      <div className="app">
        <Remo />
        <Demo />
      </div>
    </main>
  );
};

export default App;
