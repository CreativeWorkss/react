import logo from "./logo.svg";
import "./App.css";
import NormalComponent from "./HOC/NormalComponent";
import UpdatedComponent from "./HOC/UpdatedComponent";

function App() {
  return (
    <div className="App">
      <NormalComponent name="Normal" />
      <UpdatedComponent name="Updated" />
    </div>
  );
}

export default App;
