
import React from 'react';
import ReactDOM from 'react-dom';
import Home  from './components/Home';
import $ from 'jquery'; 
import Data from './components/Data';
import { getLocalMed } from './api';


const renderWidget = async event => {
	event.preventDefault();
	event.stopPropagation();
	let shareid = event.target.shareid;
	let local_med_data;
	await getLocalMed(shareid).then(data => {
		local_med_data=data;
	});

	let options = {
			href: event.target.getAttribute('href'),
			showModal: true,
			local_med_data
        }
	   
		let rootWidgetDiv;
	
		rootWidgetDiv = document.createElement('div');
		rootWidgetDiv.id = 'reactWidget';
		document.body.appendChild(rootWidgetDiv);


	ReactDOM.render(<Home { ...options } />, rootWidgetDiv)
};

const directUrl = async (event, id) => {
	let local_med_data;
	console.log(id);
	await getLocalMed(id).then(data => {
		local_med_data=data;
	});
	let opt = {
		local_med_data
	}
	let rootWidgetDiv;
		rootWidgetDiv = document.createElement('div');
		rootWidgetDiv.id = "data-widget";
		document.body.appendChild(rootWidgetDiv);
	ReactDOM.render(<Data {...opt} />, rootWidgetDiv)
}

const getId = id => {
	if(id != undefined) {
		return id.substring(id.lastIndexOf('/')+1);
	}
	return id;
}

$(window).on('load', function (e){
	const id = getId(window.location.href);
	if( id != "") {
		directUrl(e, id);
		return false;
	} else {
		// var  a = document.querySelectorAll('a');
		var  a = document.querySelectorAll('[data-iframe-react-toggle="modal"]');
		for (var i =0; i < a.length; i++){
			a[i].addEventListener("click", renderWidget);
			a[i].shareid = getId(a[i].href);
		}
	}
})

