import React, { Component } from 'react';
import axios from "axios";
import { UncontrolledCarousel } from "reactstrap";

import {
  Card,
  CardBody,
  Row,
  Col,
  ButtonGroup,
  Button
} from "reactstrap";

import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

const items = [
  {
    src: "testimonial-bg.jpg",
    altText: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    caption: 'Vishnu',
    header: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  },
  {
    src: "testimonial-bg.jpg",
    altText: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    caption: 'raj',
    header: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  }
];


class Testnimonial extends React.Component {



render() {
	 return (
	     <div className="gray-container">
          <div className="container">
            <div className="home-container testnimonial" >
              
          <Card className="shadow">
              <CardBody>
                <h3 align="center" className="text-info"> What our client says ? </h3>
                <hr />

              <div className="row">
                <div className="col-md-6 col-xs-12">
                  <p> 
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <div className="col-md-6 col-xs-12" align="center">
                  <img src="home-product7.png" alt="" />
                </div>
                <div className="container-fluid" style={{ paddingBottom: 20 }}>
               </div>


                        <UncontrolledCarousel items={items} />
                      
                    </div>
                      </CardBody>
                    </Card>

	                </div>
                </div>
         </div>
        )
	}
}

export default Testnimonial;