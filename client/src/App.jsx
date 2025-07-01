import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import DividendCalendar from "./pages/DividendCalendar";
import ValuationCheckPage from "./pages/ValuationCheckPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
        {isLandingPage && <Footer />}
      </QueryClientProvider>
    </>
  );
}

export default App;
