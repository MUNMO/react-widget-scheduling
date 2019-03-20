// This component renders when you hit the URL directly on browser with ID 

import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

class Data extends Component {
    constructor() {
        super();
        
    }
    render() {
        console.log(this.props);
        let html_data = this.props.local_med_data.html;
        
        return (
            <div>
              
              <ul>
                  {ReactHtmlParser(html_data)}
                </ul>
            </div>
        );
    }
}

export default Data;
