import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Demo from './components/Demo/Demo';
import Setup from './components/Setup/Setup';
import Features from './components/Features/Features';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Banner />
        <Demo />
        <Setup />
        <Features />
      </header>
    </div>
  );
}

export default App;
