import React, { Component } from 'react';

class Userinfo extends Component{
	constructor() {
        super();
         this.state = {
        };
    }
    saveAndContinue = (e) => {
    	e.preventDefault()
       this.props.nextStep()
    }
    render(){
    	const { values } = this.props;
        return(
            <div>
	            	<span className="register-heading text-info"> User Info : </span>
	            	<div className="row m-t-md" >
	            		<div  className="col-md-6 col-xs-12 form-group">
	            			<input class="form-control" type="email" placeholder="Enter your email id"  defaultValue={values.email} onChange={this.props.handleChange('email')}   />
	            		</div>
	            		<div  className="col-md-6 col-xs-12 form-group">
	            			<input type="file" class="form-control-file" id="exampleFormControlFile1" />
	            		</div>
	            		
	            		<hr />
	            		
	            		<div  className="col-md-6 col-xs-12 form-group">
	            			<input class="form-control" type="password" placeholder="Password" defaultValue={values.password} onChange={this.props.handleChange('password')}  />
	            		</div>
	            		<div  className="col-md-6 col-xs-12 form-group">
	            			<input class="form-control" type="password" placeholder="Confirm Password"  defaultValue={values.cpassword} onChange={this.props.handleChange('cpassword')}  />
	            		</div>
	            		<div  className="col-md-6 col-xs-12 form-group">
	            			<input class="form-control" type="text" placeholder="First Name"  defaultValue={values.first_name} onChange={this.props.handleChange('first_name')} />
	            		</div>
	            		<div  className="col-md-6 col-xs-12 form-group">
	            			<input class="form-control" type="text" placeholder="Last Name" defaultValue={values.last_name} onChange={this.props.handleChange('last_name')} />
	            		</div>

	            		<div  className="col-md-6 col-xs-12 form-group">
            			    <select class="custom-select" onChange={this.props.handleChange('currency')}>
						      <option value="">Prefered Trading currency</option>
						      <option value="inr">INR</option>
						      <option value="usd">USD</option>
						    </select>
	            		</div>
	            		<div  className="col-md-6 col-xs-12 form-group">
	            			<input class="form-control" type="text" placeholder="Position" defaultValue={values.position} onChange={this.props.handleChange('position')} />
	            		</div>
	            	</div>
	                <button className="btn btn-info"  onClick={this.saveAndContinue}> Next  <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </button>
            </div>
        )
    }
}

export default Userinfo;