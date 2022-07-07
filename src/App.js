import './App.scss';
import About from './components/About';
import Avatar from './components/Avatar';
import Meta from './components/Meta';
import Socials from './components/Socials';

function App() {
  return (
    <div className="App">
      <div class="business-card">
        <header>
          <Avatar />
          <Meta />
        </header>
        <main>
          <About />
        </main>
        <footer>
          <Socials />
        </footer>
      </div>
    </div>
  );
}

export default App;
