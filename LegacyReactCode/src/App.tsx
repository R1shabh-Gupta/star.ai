import './App.css';
import { ThemeProvider } from '@/components/theme-provider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import SearchEngine from './pages/SearchEngine';
import Chatbox from './pages/Chatbox';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/chatbot" element={<Chatbox />} />

          <Route path="/search-engine" element={<SearchEngine />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
