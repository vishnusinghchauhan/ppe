import React, { Component } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import { login } from '../../Actions/CompanyAction';
import { withRouter } from "react-router";


class Login extends React.Component {

    constructor() {
        super();
         this.state = {
                email:"",
                password:"",
                errors :{}
        };
        this.submitValue = this.submitValue.bind(this); 
    }

  submitValue(event){
    event.preventDefault();
    var loginObj = {
      email:this.state.email,
      password:this.state.password,
    }
    console.log("loginObj........",loginObj)
    this.props.login(loginObj).then((res)=>{
        console.log("essss")
    });
  }

render() {
	 return (
            <div className="login-gray">
	     	<div className="login-container">
                <div className="row">
                		<div className="col-md-5 col-xs-12">
                			<div className="login-left">
                				<h3 className="text-center m-b-md"> Sign In </h3>
                  				<p className="text-center m-b-md"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . </p>
    							    <form  method="post" onSubmit={this.submitValue}>
    							        <div className="form-group">
    							            <input type="email" className="form-control" placeholder="Enter your email id" required="required"  defaultValue={this.state.email}  onChange={e => this.setState({ email: e.target.value })} />
    							        </div>
    							        <div className="form-group">
    							            <input type="password" className="form-control" placeholder="Password" required="required" defaultValue={this.state.password}  onChange={e => this.setState({ password: e.target.value })}  />
    							        </div>
    							        <div className="form-group">
    							            <button type="submit" className="btn btn-info btn-block">Login now</button>
    							        </div>
    							        <div className="clearfix m-t-lg" >
    							            <a href="#">Forgot Password?</a>
    							        </div>        
    							    </form>
                			</div>
                		</div>
                		<div className="col-md-7 col-xs-12">
                			<div className="login-right">
                				  <h3 className="login-top1">  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  </h3>
                                   <h4  className="login-top2">  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  </h4>
                			</div>
                		</div>
                </div>
            </div>
            </div>
        )
	}
}


const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(login(data))
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

