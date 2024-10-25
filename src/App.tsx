import Header from './components/specific/Header';
import CoreConcepts from './components/specific/sections/CoreConcepts';
import Examples from './components/specific/sections/Examples';
import './App.css';

function App() {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
