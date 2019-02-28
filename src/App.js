import React from 'react';
import ReactDOM from 'react-dom';
import Home  from './components/Home';
import { Router, Route, Switch,browserHistory} from "react-router";
import { BrowserRouter}from 'react-router-dom'





class App extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
        
            <div>
               <Home shareid={this.props.share_id} />
                
            </div>

            
           
        )
    }
} 

export default App;
