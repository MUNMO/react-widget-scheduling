
import React from 'react';
import ReactDOM from 'react-dom';
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Home  from './components/Home';
// import 'bootstrap';
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';


const renderWidget = event => {
	event.preventDefault();
	event.stopPropagation();

	let options = {
			href: event.target.getAttribute('href'),
			showModal: true
        },
        //??
		widgetId = event.target.getAttribute('data-widget-rootid') || 'reactWidget';
    //??
	let rootWidgetDiv = document.querySelector(`#${widgetId}`);

	if (!rootWidgetDiv) {
		rootWidgetDiv = document.createElement('div');
		rootWidgetDiv.id = widgetId;

		document.body.appendChild(rootWidgetDiv);
	}


	ReactDOM.render(<Home { ...options } />, rootWidgetDiv)
};

((fn) => {
	if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
		fn();
	}
	else {
		document.addEventListener('DOMContentLoaded', fn);
	}
})(() => {
	document.querySelectorAll('[data-iframe-react-toggle="modal"]').forEach(node => {
		node.addEventListener('click', renderWidget);
	});
})
