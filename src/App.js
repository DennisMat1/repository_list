import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import RepositorySelector from "./RepositorySelector";
import RepositoryDetails from "./RepositoryDetails";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<RepositorySelector />} />
          <Route path="/repos/:user/:repo" element={<RepositoryDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
