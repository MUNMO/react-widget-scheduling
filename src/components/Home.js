import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import {Link} from 'react-router-dom'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
// import styles from '../css/map.scss'


class Home extends React.Component{

    
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      
      // Save local med data
      users:[]
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  componentDidMount(){
    //Adding local med script 
    var script = document.createElement('script');
    script.src ="https://www.localmed.com/assets/web/js/widget.js"
    document.getElementsByTagName('head')[0].appendChild(script);
    
    // storing prop in variable with parameter
    const share_id = this.props.match.params.id
    console.log(share_id)

    fetch(`https://online-scheduling-staging.herokuapp.com/api/v1/schedule_online?share_id=${share_id}`)
    .then(response => response.json())
    .then(data =>
     this.setState({users:data.html},()=>console.log(this.state.users +"data type" +typeof this.state.users))
    )

    .catch(error => {
        console.log("Error: ", error);
      });
    
}


    render(){
        const data_received = this.state.users
        return(
        <div>

          { ReactHtmlParser(data_received)}
          
      </div>
      )
    }
}

export default Home;