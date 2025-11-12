import logo from "./logo.svg";
import "./App.css";
import NormalComponent from "./HOC/NormalComponent";
import UpdatedComponent from "./HOC/UpdatedComponent";
import Counter from "./redux/Counter";
import User from "./redux/User";

function App() {
  return (
    <div className="App">
      <User />
    </div>
  );
}

export default App;
