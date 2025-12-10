import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";

import IntroOverlay from "@/components/IntroOverlay";
import IntroPage from "@/pages/intro";
import HomePage from "@/pages/home";
import TimelinePage from "@/pages/timeline";
import TokohPage from "@/pages/tokoh";
import TokohDetailPage from "@/pages/tokoh-detail";
import PeristiwaDetailPage from "@/pages/peristiwa-detail";
import GaleriPage from "@/pages/galeri";
import PetaPage from "@/pages/peta";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/intro" component={IntroPage} />
        <Route path="/" component={HomePage} />
        <Route path="/timeline" component={TimelinePage} />
        <Route path="/tokoh" component={TokohPage} />
        <Route path="/tokoh/:slug" component={TokohDetailPage} />
        <Route path="/peristiwa/:slug" component={PeristiwaDetailPage} />
        <Route path="/galeri" component={GaleriPage} />
        <Route path="/peta" component={PetaPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <IntroOverlay />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
