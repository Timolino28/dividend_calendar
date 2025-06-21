import "./App.css";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import DividendCalendar from "./pages/DividendCalendar";
import ValuationCheckPage from "./pages/ValuationCheckPage";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/calendar" element={<DividendCalendar />} />
          <Route path="/valuation-check" element={<ValuationCheckPage />} />
        </Routes>
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
