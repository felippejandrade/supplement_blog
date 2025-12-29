/*
 * App.tsx - Suplementação Pro
 * Design: Performance Tech - Dark premium theme
 * Main router and providers configuration
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Home from "./pages/Home";
import Category from "./pages/Category";
import CategoryPage from "./pages/CategoryPage";
import Categories from "./pages/Categories";
import Post from "./pages/Post";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/categorias" component={Categories} />
      <Route path="/categoria/:slug" component={CategoryPage} />
      <Route path="/post/:slug" component={Post} />
      <Route path="/sobre" component={About} />
      <Route path="/contato" component={Contact} />
      <Route path="/404" component={NotFound} />
      {/* Fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                color: "hsl(var(--foreground))",
              },
            }}
          />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
