import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Series from './pages/Series';
import Movies from './pages/Movies';
import Header from './components/Header';

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <Header />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </QueryClientProvider>
);

export default App;
