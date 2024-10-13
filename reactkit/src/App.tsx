// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
// Removed styled-components imports
// Removed ThemeProvider and GlobalStyle

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

const App: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <QueryClientProvider client={queryClient}>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister }}
      >
        <Router>
          {/* Use Tailwind utility classes for global styling */}
          <div className="min-h-screen bg-background text-text">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* Add more routes as needed */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          {/* React Query Devtools */}
          <ReactQueryDevtools initialIsOpen={false} />
        </Router>
      </PersistQueryClientProvider>
    </QueryClientProvider>
  );
};

export default App;
