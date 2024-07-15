import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthProvider } from './AuthContext';
import HomePage from './pages/HomePage';
import RegisterArtist from './pages/CreateAccount'; 
import ArtistPage from './pages/ArtistPage';
import SignInPage from './pages/SignInPage';
import ProtectedRoute from './components/ProtectedRoute'; // Імпорт компоненту ProtectedRoute

const App = () => (
  <Router>
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterArtist />} />
        <Route path="/artist" element={<ProtectedRoute element={<ArtistPage />} />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
      <Footer />
    </AuthProvider>
  </Router>
);

export default App;
