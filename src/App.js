import classes from "./App.module.css";
import LoginPage from "./Containers/Login Full Page/LoginPage";
import { BrowserRouter } from "react-router-dom";
import HomePage from './Containers/HomePage/HomePage'
import CircularAvatar from './Components/CircularAvatar/CircularAvatar'

function App() {
  return (
    <div className={classes.App}>
      <BrowserRouter>
        <HomePage /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
