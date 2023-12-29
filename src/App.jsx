import './App.css';
import Addtask from './components/Addtask';
import ListTasks from "./components/ListTasks";

function App() {
  return (
    <div className="App">
      <Addtask />
      <ListTasks />
    </div>
  );
}

export default App;
