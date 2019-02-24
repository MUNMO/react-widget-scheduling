import React from 'react';
import ReactDOM from 'react-dom';
import Home  from '../app/components/Home';
import { Router, Route, Switch,browserHistory} from "react-router";
import { BrowserRouter}from 'react-router-dom'





class App extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
        
            <div>
                <BrowserRouter>
                <div>
                {/* Passing share_id via router  */}
                {/* Receving  props from App Component into Home Component */}
                <Route exact path={"/"} component={() => <Home shareid={this.props.share_id}/>}/>
                {/* <Route path={"/schedular"} component={Schedular}/> */}
                </div>
                 </BrowserRouter>
                
            </div>

            
           
        )
    }
} 

export default App;
