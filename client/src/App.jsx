import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import DividendCalendar from "./pages/DividendCalendar";
import ValuationCheckPage from "./pages/ValuationCheckPage";

const queryClient = new QueryClient();

function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/calendar" element={<DividendCalendar />} />
          <Route path="/valuation-check" element={<ValuationCheckPage />} />
        </Routes>
        {isLandingPage && <Footer />}
      </QueryClientProvider>
    </>
  );
}

export default App;
