import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';



// Getting attribute of element and passing to APP component as Prop
// var el = document.getElementById("container")
// var el_attr = el.getAttribute("data-id");
// share_id={el_attr}


ReactDOM.render(<App/>,document.getElementById('container'));
