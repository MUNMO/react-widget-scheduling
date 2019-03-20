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

//   componentDidMount(){
//     //Adding local med script 
//     var script = document.createElement('script');
//     script.src ="https://www.localmed.com/assets/web/js/widget.js"
//     document.getElementsByTagName('head')[0].appendChild(script);

//     // Getting last segement of URL 
//     const share_id = this.props.href
//     const slice_url = share_id.substring(share_id.lastIndexOf('/') + 1)
//     console.log(slice_url)

//     fetch(`https://online-scheduling-staging.herokuapp.com/api/v1/schedule_online?share_id=${slice_url}`)
//     .then(response => response.json())
//     .then(data =>
      
//      this.setState({users: data.html},()=>console.log(this.state.users +"data type" +typeof this.state.users))
//     )

//     .catch(error => {
//         console.log("Error: ", error);
//       });

// }


    render(){
        // const data_received = this.state.users
        const { showModal } = this.state;
        const { local_med_data:{html} } = this.props;
       return(
          
        <div>
       
				{
					showModal ? <Modal close={this.handleClose} lists={html} /> : ''
				}
            
        
    </div>

      )
    }
}

export default Home;