
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ConsumerDashboardPage from "./pages/dashboards/ConsumerDashboardPage";
import DriverDashboardPage from "./pages/dashboards/DriverDashboardPage";
import CollectorDashboardPage from "./pages/dashboards/CollectorDashboardPage";
import RecyclingManagerDashboardPage from "./pages/dashboards/RecyclingManagerDashboardPage";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import SchedulePickup from "./pages/SchedulePickup";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schedule-pickup" element={<SchedulePickup />} />
          <Route path="/dashboard/consumer" element={<ConsumerDashboardPage />} />
          <Route path="/dashboard/driver" element={<DriverDashboardPage />} />
          <Route path="/dashboard/collector" element={<CollectorDashboardPage />} />
          <Route path="/dashboard/recycling-manager" element={<RecyclingManagerDashboardPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
