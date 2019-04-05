// Renders modal 
import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Modal from './Modal'


class Home extends React.Component{ 
  constructor(props) {
    super(props);
    this.state = {
      showModal: props.showModal != undefined ? props.showModal : true
    };

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(){
		this.setState({
			showModal: !this.state.showModal
		})
  }
  
  componentWillReceiveProps(nextState, nextProps) {
		this.setState({
			showModal: nextState.showModal
		});
	}

    render(){
        const { showModal } = this.state;
        const { local_med_data} = this.props;
       return(  
        <div>
				{
					showModal ? <Modal close={this.handleClose} lists={local_med_data} /> : ''
        }
        </div>
      )
    }
}
export default Home;