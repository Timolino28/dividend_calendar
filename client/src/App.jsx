import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DividendCalendar from "./pages/DividendCalendar";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DividendCalendar />
      </QueryClientProvider>
    </>
  );
}

export default App;
