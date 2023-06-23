import './App.css';
import EmployeeList from './components/employeelist/EmployeeList.js';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <EmployeeList/>
    </div>
  );
}

export default App;
