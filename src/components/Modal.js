// This Component renders when you want see data on modal 
import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import '../../style.css';

class Modal extends Component {
    render() {
        console.log("Modal",this.props);
        const { lists, close } = this.props;
        return (
        <div className="popup">
            <div className="popup-dialog">
                <div className="popup-content">
                <div className="popup-header">
                    <h5 className="popup-title" id="exampleModalLiveLabel">Book Appointment Online</h5>
                    <button className="popup-close" onClick={close} type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                    <div className="popup-body">
                     Name:{lists.name}
                     <br/>
                     Email:{lists.email}
                     <br/>
                     Website:{lists.website}
        
                    </div>
                    <div className="popup-footer">
                      <button type="button" className="popup-btn popup-btn-red mg-rgt-5rem" onClick={close} data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Modal;
