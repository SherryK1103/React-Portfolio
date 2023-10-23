// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Contact />
      <Error />
      <Portfolio />
      <Resume />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;
