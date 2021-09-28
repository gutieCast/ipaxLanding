import { StarsBackground } from './components/StarsBackground';
import { DownloaderIpaxApp } from './components/DownloaderIpaxApp';
import './App.scss';
import { Hero } from './components';

function App() {
  return (
    <div className="App">
      <StarsBackground />
      <Hero>
        <DownloaderIpaxApp />
      </Hero>
    </div>
  );
}

export default App;
