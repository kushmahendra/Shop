// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import SignIn from './user/SignIn';
// import SignUp from './user/SignUp';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route  path="/signin"  element={<SignIn />}  />
//         <Route  path="/signup"  element={<SignUp />}  />
//         <main className="min-h-screen">
//         <Route path="/"  element={<Navbar />}/>
//         <Route path="/"  element={<Hero />}/>
//           </main>
          
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SignIn from './user/SignIn';
import SignUp from './user/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default/Home Route */}
        <Route 
          path="/" 
          element={
            <>
              <main className="min-h-screen">
              <Navbar />
              <Hero />
              </main>
            </>
          } 
        />
        
        {/* SignIn Route */}
        <Route path="/signin" element={<SignIn />} />
        
        {/* SignUp Route */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;



