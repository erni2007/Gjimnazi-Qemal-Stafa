import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProfileNatyror from "./pages/profiles/ProfileNatyror";
import ProfileMatematike from "./pages/profiles/ProfileMatematike";
import ProfileShoqeror from "./pages/profiles/ProfileShoqeror";
import ProfileGjuhe from "./pages/profiles/ProfileGjuhe";
import ProfileArte from "./pages/profiles/ProfileArte";
import HistoryPage from "./pages/heritage/HistoryPage";
import MuseumPage from "./pages/heritage/MuseumPage";
import AwardsPage from "./pages/heritage/AwardsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/profili-natyror" element={<ProfileNatyror />} />
            <Route path="/profili-matematike" element={<ProfileMatematike />} />
            <Route path="/profili-shoqeror" element={<ProfileShoqeror />} />
            <Route path="/gjuhe-te-huaja" element={<ProfileGjuhe />} />
            <Route path="/arte-muzike" element={<ProfileArte />} />
            <Route path="/historia" element={<HistoryPage />} />
            <Route path="/muzeu" element={<MuseumPage />} />
            <Route path="/cmime" element={<AwardsPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
