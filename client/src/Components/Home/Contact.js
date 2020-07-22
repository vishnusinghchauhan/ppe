import React, { Component } from 'react';
import axios from "axios";

import {
  Card,
  CardBody,
} from "reactstrap";



class Contact extends React.Component {


render() {
	 return (
	     <div className="gray-container">
                <div className="container">
	                <div className="home-container about">
	                	
	                	<Card className="shadow">
                    <CardBody>
                    	<h3 align="center" className="text-info"> Contact Us </h3>
                    	<hr />
		                <div className="row">
		                	<div className="col-md-6 col-xs-12">
		                		<p> 
			                	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
								Why do we use it? 
			                	</p>
		                	</div>
		                	<div className="col-md-6 col-xs-12">
		                		<h4 className="text-warning"> Submit Query </h4>
		                		<form>
							  <div className="form-group">
							    <input type="email" placeholder="Name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
							  </div>
							  <div className="form-group">
							    <input type="password" placeholder="Email"  className="form-control" id="exampleInputPassword1" />
							  </div>
							  <div className="form-group">
							    <input type="password" placeholder="Subject"  className="form-control" id="exampleInputPassword1" />
							  </div>
							  <button type="submit" className="btn btn-primary">Submit</button>
							</form>
		                	</div>

			                <div className="col-md-12 m-t-md">
			                	<p> 
			                	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
								Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
			                	</p>
			                </div>
		                </div>
                    	</CardBody>
	                  </Card>

	                </div>
                </div>
         </div>
        )
	}
}

export default Contact;