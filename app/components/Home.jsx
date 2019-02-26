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
    
    // storing prop in variable
    const share_id = this.props.shareid
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
           <Button variant="primary" className="custom-btn" onClick={this.handleShow}>
            Schedule  Online
           </Button>
        
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Book Appointment Online </Modal.Title>
            </Modal.Header>
          <Modal.Body>
           
           {/* Display Local med link with ID  */}
            
          { ReactHtmlParser(data_received)}
           
           {/* <Link to={`/schedular/2`}>Roostergrin</Link> */}
             
            
          </Modal.Body>
          
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>

      </div>
      )
    }
}

export default Home;