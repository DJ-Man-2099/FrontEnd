import React,{Component} from 'react'
import Login from '../Login/Login';
import classes from './LoginPage.module.css'
import image from '../../assets/Filler.png'
 
class LoginPage extends Component {
    render() {
        return (
            <div className={classes.Main}>
                   <Login/>
                   <div className={classes.Blue}>
                   <img src={image} alt='' className={classes.Image}/>
                   </div>   
            </div>
        );
    }
}
 
export default LoginPage