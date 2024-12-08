import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { Community } from './pages/Community';
import { Encyclopedia } from './pages/Encyclopedia';
import { News } from './pages/News';
import { Profile } from './pages/Profile';
import { AppLayout } from './components/layout/AppLayout';
import './styles/fonts.css';
import './styles/animations.css';

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route 
            path="/" 
            element={
              <AppLayout showNav={false}>
                <Landing />
              </AppLayout>
            } 
          />
          <Route 
            path="/app" 
            element={
              <AppLayout>
                <Dashboard />
              </AppLayout>
            } 
          />
          <Route 
            path="/community" 
            element={
              <AppLayout>
                <Community />
              </AppLayout>
            } 
          />
          <Route 
            path="/encyclopedia" 
            element={
              <AppLayout>
                <Encyclopedia />
              </AppLayout>
            } 
          />
          <Route 
            path="/news" 
            element={
              <AppLayout>
                <News />
              </AppLayout>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <AppLayout>
                <Profile />
              </AppLayout>
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;