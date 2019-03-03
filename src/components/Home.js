import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import {Link} from 'react-router-dom'
import Widget  from './Widget';
import Iframe from 'react-iframe';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


class Home extends React.Component{

    
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      
      // Save local med data
      users:[]
    };
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
           <h3>Schedule Appointment Online</h3>
           
          { ReactHtmlParser(data_received)}

          {/* <Widget param_prop = {this.props.match.params.id}/> */}

          {/* This button will be hidden and give to the user to embed the widget on the screen  */}

          {/* <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button> */}

            <div id="myModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                

       
        <div className="modal-content">
        <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Schedule Appointment Online</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div className="modal-body">
         
         {/* Getting the ID through the URL into Iframe  */}

        <Iframe url={"https://ui-online-scheduling-staging.herokuapp.com/widget/"+this.props.match.params.id}
            width="100%"
            height="450px"
            id="_align_widget_custom"
            className="_align_widget"
            display="initial"
            position="relative"
            allowFullScreen/>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
        </div>

    </div>
    </div>


            


          
      </div>
      )
    }
}

export default Home;