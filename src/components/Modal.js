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
                        <h5 className="popup-title" id="exampleModalLiveLabel">Modal title</h5>
                        <button className="popup-close" onClick={close} type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="popup-body">
                        
                            
                            {/* {
                                lists.map((list,i) => {
                                    return ReactHtmlParser(list)
                                })
                            } */}

                            {ReactHtmlParser(lists)}
                        
                    </div>
                    <div className="popup-footer">
                        <button type="button" className="popup-btn popup-btn-red mg-rgt-5rem" onClick={close} data-dismiss="modal">Close</button>
                        {/* <button type="button" className="popup-btn popup-btn-green" onClick={close}>Save changes</button> */}
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
