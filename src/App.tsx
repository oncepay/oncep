import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import CodeOfConduct from "./pages/CodeOfConduct";
import WhatsAppIntegration from "./pages/WhatsAppIntegration";
import SplitSettlements from "./pages/SplitSettlements";
import WebsiteIntegration from "./pages/WebsiteIntegration";
import WhatsAppChatbot from "./pages/WhatsAppChatbot";
import ScrollToTop from "./components/ScrollToTop";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/services/whatsapp-integration" element={<WhatsAppIntegration />} />
          <Route path="/services/whatsapp-chatbot" element={<WhatsAppChatbot />} />
          <Route path="/services/split-settlements" element={<SplitSettlements />} />
          <Route path="/services/website-integration" element={<WebsiteIntegration />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
