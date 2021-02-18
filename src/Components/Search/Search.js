import React, {useState, useRef} from "react";
import icon from "../../assets/search.webp";
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
      <div className={classes.holder}>
        <img src={icon} alt="" className={classes.image} />
      </div>
    </div>
  );
};

export default Search;
