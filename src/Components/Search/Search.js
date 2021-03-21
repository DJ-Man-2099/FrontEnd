import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState, useRef} from "react";
import classes from "./Search.module.css";

const Search = (props) => {
  const [Main,setMain] = useState(classes.Main);

  const input = useRef()

  const Focus = () => {
    setMain(classes.Main + " " + classes.Focus);
  };

  const Abort = () => {
    setMain(classes.Main);
  };

  return (
    <div className={Main}>
      <input placeholder="Search Here" className={classes.input} onFocus={Focus} onBlur={Abort}/>
      <div >
        <FontAwesomeIcon icon={faSearch} size='2x'/>
      </div>
    </div>
  );
};

export default Search;
