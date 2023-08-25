import { Outlet } from 'react-router-dom';
// import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {
  return (
    <div>

      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default App;
