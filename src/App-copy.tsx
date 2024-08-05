import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AppLayout from "./Layout";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

