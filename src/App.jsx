import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import AccountSettings from "./components/Accountsetting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account-settings" element={<AccountSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
