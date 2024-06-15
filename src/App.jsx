import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LogRocket from 'logrocket';

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";

const App = () => {
  useEffect(() => {
    LogRocket.init('cxnnse/3d-portfolio');
    
    const sessionId = uuidv();
    
    LogRocket.identify(sessionId, {
      sessionType: 'anonymous'
    });
  }, []);

  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;