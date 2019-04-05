import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

class Data extends Component {
    constructor() {
        super();
    }
    render() {
        console.log(this.props);
        let html_data = this.props.local_med_data;
        
        return (
            <div>
              
              <ul>
                <li>Name:{html_data.name}</li>
                <li>Email:{html_data.email}</li>
                <li>Website:{html_data.website}</li>
                </ul>
            </div>
        );
    }
}

export default Data;
