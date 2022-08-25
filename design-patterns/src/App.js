import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TaskManager from './components/tasksManager'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      <TaskManager></TaskManager>
      </header>
    </div>
  );
}

export default App;
