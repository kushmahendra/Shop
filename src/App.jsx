import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SignIn from './user/SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/signin"  element={<SignIn />}  />
        <Route 
          path="/*"  element={
            <>
             <main className="min-h-screen">
             <Navbar />
             <Hero />
         
          </main>
            </>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;



