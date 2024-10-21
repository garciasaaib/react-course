import './App.css';
import { BandAdd } from './components/BandAdd';
import { BandList } from './components/BandList';

function App() {
  return (
    <div className="container">
      <div className="alert">
        <p>Service Status:
          <span className='text-success'> Online</span>
          <span className='text-danger'> Offline</span>
        </p>
      </div>
      <h1>BandNames</h1>
      <hr />
      <div className="row">
        <div className="col">
          <BandList />
        </div>
        <div className="col">
          <BandAdd />
        </div>
        </div>
    </div>
  );
}

export default App;
