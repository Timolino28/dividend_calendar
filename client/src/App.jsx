import "./App.css";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import DividendCalendar from "./pages/DividendCalendar";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/calendar" element={<DividendCalendar />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
