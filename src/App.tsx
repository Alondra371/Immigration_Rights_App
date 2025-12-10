import './App.css';
import { useTheme } from './ThemeContext';
import {Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import LegalResources from "./LegalResources";
import Forum from "./Forum";
import About from "./About";



function App() {
  const { theme, setTheme } = useTheme();
  return (
    <div className={`app theme-${theme}`}>
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <div className="logo-icon">⚖️</div>
            <span className="logo-text">Legal Aid Network</span>
          </div>

          <nav className="nav">
            <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link-active" : "")
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/legal-resources"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " nav-link-active" : "")
              }
            >
              Legal Resources
            </NavLink>

            <NavLink
              to="/forum"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " nav-link-active" : "")
              }
            >
              Forum
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " nav-link-active" : "")
              }
            >
              About
            </NavLink>
          </nav>

          {/* Theme Switch Buttons */}
          <div className="theme-buttons">
            <button onClick={() => setTheme('light')}>🌞 Light</button>
            <button onClick={() => setTheme('dark')}>🌙 Dark</button>
            <button onClick={() => setTheme('high-contrast')}>⚡ High Contrast</button>
          </div>
        </div>
      </header>

            {/* Routed content */}
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal-resources" element={<LegalResources />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <p>© {new Date().getFullYear()} Legal Aid Network (Demo Site).</p>
          <p className="footer-note">
            Always verify information with a licensed immigration attorney or
            accredited representative. This project is for learning and
            educational purposes.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;