import React from 'react';
import ReactDOM from 'react-dom';
import Home  from './components/Home';
// import Widget  from './components/Widget';
import { BrowserRouter} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component{

    constructor(props){
        super(props)
 
       
    }
    render(){
        return(
           
            <BrowserRouter>
             <div className="_align_widget">
             <Route exact path = "/widget/:id" component={Home}/>
             
            {/* <Route exact path="/iframe/:id" component={Widget}/> */}
             
             </div>
             
            </BrowserRouter> 
            )
            }
           
        
    }


export default App;
