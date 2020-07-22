import React, { Component } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import Userinfo from './userinfo';
import CompanyInfo from './companyinfo';
import ContactDetails from './contactdetail';
import { register } from '../../Actions/CompanyAction';
import { withRouter } from "react-router";

class Register extends React.Component {  
  constructor() {
        super();
        this.state = {
            step: 1,
            email: '',
            profile_url: '',
            password: '',
            cpassword: '',
            currency: '',
            position: '',
            first_name:'',
            last_name:'',

            name:'',
            region:'',
            country:'',
            address:'',
            city:'',
            zip:'',
            introduction:'',
            logo_url:'',
            year:'',
            vet_number:'',
            reg_number:'',
            accreditations:'',

            contact_person:'',
            contact_position:'',
            website:'',
            mobile_no:'',
            mobile_no1:'',
            how_here:'',
            companyType: [
                {id: 1, value: "Supplier", isChecked: false},
                {id: 2, value: "Exporter", isChecked: false},
                {id: 3, value: "Reseller", isChecked: false},
                {id: 4, value: "Distributor", isChecked: false},
                {id: 4, value: "Importer", isChecked: false},
                {id: 4, value: "Broker", isChecked: false},
                {id: 4, value: "ITAD", isChecked: false},
                {id: 4, value: "EDU", isChecked: false}
            ]
        }
        this.submitValue = this.submitValue.bind(this); 
    }
    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
      console.log("IN....", input, event.target.value)
        this.setState({ [input] : event.target.value })
    }

    submitValue(event){
      event.preventDefault();
      var registerObj =  this.state;
      console.log("saving............", registerObj)
      this.props.register(registerObj).then((result)=>{
        this.setState({loading: false})
      }).catch((err)=>{
        this.setState({loading: false})
      });
    }


    errorMsg = (obj) => {
      this.setState({errors: obj})
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }


  renderSwitch(param) {
      const {loading, email,profile_url, first_name, last_name, mobile_no1, mobile_no, password, cpassword,currency, position, name, region, country, address, city, zip, introduction, logo_url, year, vat_nember, reg_number,   accreditations, contact_position, contact_persion, how_here, website, companyType } = this.state;
      const values = {loading,  email,profile_url,  mobile_no1, mobile_no, password, cpassword, first_name, last_name, currency, position, name, region, country, address, city, zip, introduction, logo_url, year, vat_nember, reg_number,   accreditations, contact_position, contact_persion, how_here, website, companyType};
      switch(param) { 
       case 1:
                return <Userinfo
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange = {this.handleChange}
                      values={values}
                      />
        case 2:
                return <CompanyInfo
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange = {this.handleChange}
                      values={values}
                      />  
        case 3:
                return <ContactDetails
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange = {this.handleChange}
                      values={values}
                      />
       default:
            return '<>';         
      
      }
  }

render() {
  const {step} = this.state;
	 return (
	     	   <div>
            <div className="top-register">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-md-5">
                      <h4> Sign-up </h4>
                      <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  </p>
                      <p>  Home  / <span className="text-info"> Sign-up </span> </p>
                  </div>
                  <div className="col-xs-12 col-md-7">
                    <div className="reg-text"> Registration </div>
                  </div>
                </div>
                  </div>
            </div>
            <div className="login-gray">
                <div className="register-container">
                  <h3 className="text-center text-info"> Sign-up </h3>
                  <div className="breadcum"> 
                      <span className={this.state.step >= 1 && "active"}> <i class="fa fa-user-circle-o" aria-hidden="true"></i> User Info </span>
                      <span className={this.state.step >= 2 && "active"}> <span className="arrowOne">----->-----</span>  <i class="fa fa-briefcase" aria-hidden="true"></i>  Company Account </span>
                      <span className={this.state.step >= 3 && "active"}> <span className="arrowTwo">--->---</span>  <i class="fa fa-address-book-o" aria-hidden="true"></i> Contact Details </span>
                  </div>
                	 <form  onSubmit={this.submitValue}>
                      {this.renderSwitch(step)}
                    </form>
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
    register: (data) => dispatch(register(data))
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
//export default connect(mapStateToProps, mapDispatchToProps)(Register);