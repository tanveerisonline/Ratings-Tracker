import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Header";
import SideNav from "./Pages/SideNav";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <SideNav />
      <div className="main-container">
        <Header />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
