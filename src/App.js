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
