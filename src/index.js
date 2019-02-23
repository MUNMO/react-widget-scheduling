import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';



// Getting attribute of element and passing to APP component as Prop
var el = document.getElementById("container")
var el_attr = el.getAttribute("data-id");


ReactDOM.render(<App share_id={el_attr} />,document.getElementById('container'));



//Basically whenever we change something in your source code, the change will apply in your app running in the browser without reloading the entire page.
module.hot.accept();