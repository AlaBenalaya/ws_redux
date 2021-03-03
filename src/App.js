import logo from './logo.svg';
import './App.css';
import AddTask from './Components/AddTask/AddTask';
import ListeTask from './Components/ListeTask/ListeTask';

function App() {
  return (
    <div className="App">
      
      <h1 className="titre">TASK OF STUDIENT</h1>
      <AddTask/>
      <ListeTask/>
    </div>
  )
}


export default App;
