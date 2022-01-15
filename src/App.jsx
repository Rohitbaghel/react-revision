import logo from './logo.svg';
import './App.css';
// import { useSelector} from 'react-redux'
import {Todo} from './component/Todo';
import {Login} from './component/Login';
import {MultipleInput} from './component/MultipleInput';
function App() {
  // const counter = useSelector((state)=>state.todo)
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Todo/> */}
      <MultipleInput/>
    </div>
  );
}

export default App;
