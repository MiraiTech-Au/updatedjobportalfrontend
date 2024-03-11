import "./App.css";
import RoutesLayout from "./infrastructure/RouteLayout";
import { BrowserRouter as Router } from "react-router-dom";
// import { getUser } from "./pages/profile";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      {/* <Navbar /> */}
      <Router>
        <RoutesLayout />
      </Router>
      {/* <BottomBar /> */}
    </div>
  );
}

export default App;
