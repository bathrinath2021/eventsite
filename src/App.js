import { Component } from "react";
import Login from "./Component/Login";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component{
  render(){
    return (
      <div className = "userLogin">
        <Login />
      </div>
    );
  }
}

export default App;