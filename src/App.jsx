import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}
