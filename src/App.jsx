import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { LanguageProvider } from "./contexts/LanguageContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Temples from "./pages/Temples";
import TempleFloorDetails from "./pages/TempleFloorDetails";
import Restaurants from "./pages/Restaurants";
import Attractions from "./pages/Attractions";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <HashRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/temples" element={<Temples />} />
                <Route path="/temple-floor/:floorNumber" element={<TempleFloorDetails />} />
                <Route path="/restaurants" element={<Restaurants />} />
                <Route path="/attractions" element={<Attractions />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Layout>
          </HashRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;