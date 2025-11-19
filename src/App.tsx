import { Toaster } from "@/components/ui/sonner"; 
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WebDevelopment from "./pages/WebDevelopment";
import AppDevelopment from "./pages/AppDevelopment";
import GraphicDesign from "./pages/GraphicDesign";
import Registration from "./pages/Registration";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}> 
    <TooltipProvider>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/app-development" element={<AppDevelopment />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/register" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
