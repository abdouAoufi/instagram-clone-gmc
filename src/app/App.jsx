import Auth from "../pages/auth/Auth";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/404/404";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
