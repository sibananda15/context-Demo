import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ThemeContextProvider, { ThemeContext } from './contexts/themeContext';
import ToggleTheme from './components/ToggleTheme';
import AuthContextProvider from './contexts/AuthContextProvider.js'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <Home />
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>


    </div>
  );
}

export default App;
