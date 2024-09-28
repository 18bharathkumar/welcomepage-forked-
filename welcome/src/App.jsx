import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './headercomponent/header';
import Body from './pages/body';
import Footer from './footercomponent/footer';
import About from './pages/about';
import Contact from './pages/contact';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Flexbox layout with full height */}
        <Header />
        <main className="flex-grow"> {/* Main content area */}
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/home" element={<Body />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="contact" element={<Contact />} />
            

            {/* Add other routes here */}
          </Routes>
        </main>
        <div className="flex justify-center"> {/* Footer at the bottom */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
