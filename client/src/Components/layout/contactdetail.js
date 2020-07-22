import React, { Component } from 'react';
import {BrowserRouter as Route, Link} from "react-router-dom";

class ContactDetails extends Component{
	constructor() {
        super();
         this.state = {
        };
    }
 
    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
    	const { values } = this.props;
        return(
            <div>
                <span className="register-heading text-info"> Contact Details : </span>

                <div className="row m-t-md" >
                    <div  className="col-md-6 col-xs-12 form-group">
                        <input class="form-control" type="text" placeholder="Contact person"  defaultValue={values.contact_person} onChange={this.props.handleChange('contact_person')}/>
                    </div>
                    <div  className="col-md-6 col-xs-12 form-group">
                        <input class="form-control" type="text" placeholder="Position"  defaultValue={values.contact_position} onChange={this.props.handleChange('contact_position')} />
                    </div>

                    <div class="input-group mb-3 col-md-6 col-xs-12">
                       <div class="input-group-append">
                        <span class="input-group-text" id="basic-addon2">+91</span>
                      </div>
                      <input type="text" class="form-control" placeholder="Mobile Number" defaultValue={values.mobile_no} onChange={this.props.handleChange('mobile_no')} />
                    </div>

                    <div class="input-group mb-3 col-md-6 col-xs-12">
                       <div class="input-group-append">
                        <span class="input-group-text" id="basic-addon2">+91</span>
                      </div>
                      <input type="text" class="form-control" placeholder="Mobile Number"  defaultValue={values.mobile_no1} onChange={this.props.handleChange('mobile_no1')} />
                    </div>


                     <div  className="col-md-6 col-xs-12 form-group">
                        <input class="form-control" type="text" placeholder="Company Website" defaultValue={values.website} onChange={this.props.handleChange('website')} />
                    </div>
                    <div  className="col-md-6 col-xs-12 form-group">
                        <select class="custom-select" onChange={this.props.handleChange('how_here')}>
                          <option value="">How did you here about us?</option>
                          <option value="facebook">Facebook</option>
                          <option value="linkedin">Linkedin</option>
                        </select>
                    </div>
                    <p className="m-l-md "> Accept our  <Link to="/">Privacy Policy </Link> and <Link to="/"> Term and Conditions </Link> </p>

                </div>
                <div className="m-t-md">
                    <button className="btn btn-light m-r-md"  onClick={this.back}>  <i class="fa fa-long-arrow-left" aria-hidden="true"></i>  Back</button>
                    <button  type="submit"  className="btn btn-info"  onClick={this.props.submitValue} >  Submit </button>
                </div>
            </div>
        )
    }
}

export default ContactDetails;