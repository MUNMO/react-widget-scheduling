import React from 'react';
import ReactDOM from 'react-dom';
import Home  from './components/Home';
import { BrowserRouter} from 'react-router-dom'
import Route from 'react-router-dom/Route'




class App extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        document.body.style.backgroundColor = "#324851";
        document.body.style.overflow ="scroll"
        return(
           
            <BrowserRouter>
             <div>
             <Route path="/widget/:id" component={Home} />
             </div>
             
            </BrowserRouter> 
            )
            }
           
        
    }


export default App;
