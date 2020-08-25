import React, { Component } from 'react';

class CompanyInfo extends Component{
	constructor() {
        super();
        this.state = {
        };
    }
  
   saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    handleCheckChieldElement = (event) => {
        console.log("yessss is  is checked", this.props.values.companyType)
        let companyType = this.props.values.companyType
        companyType.forEach(company => {
           if (company.value === event.target.value)
              company.isChecked =  event.target.checked
        })
        this.setState({companyType: companyType})
      }

    

    render(){
    	const { values } = this.props;
        const companyTypeArr = values.companyType
        return(
            <div>
                    <span className="register-heading text-info"> Company Info : </span>

                    <div className="row m-t-md" >
                        <div  className="col-md-12 col-xs-12 form-group">
                            <input class="form-control" type="text" placeholder="Company Name"  defaultValue={values.name} onChange={this.props.handleChange('name')} />
                        </div>

                        <div  className="col-md-12 col-xs-12 form-group">
                            <div className="white-box">
                            <p> Company Type </p>
                                {companyTypeArr.map((company, index) => (
                                    <div className="form-check form-check-inline" key={index}>
                                      <input className="form-check-input" type="checkbox" id={`inlineCheckbox_${index}`}  value={`${company.value}`} onClick={this.handleCheckChieldElement}  />
                                      <label class="form-check-label" htmlFor={`inlineCheckbox_${index}`} >{company.value}</label>
                                    </div>
                                ))} 
                            </div>
                        </div>

                        <div  className="col-md-6 col-xs-12 form-group">
                            <select class="custom-select"  onChange={this.props.handleChange('region')} >
                              <option value="">Select  Region</option>
                              <option value="in">India</option>
                              <option value="us">US</option>
                            </select>
                        </div>

                        <div  className="col-md-6 col-xs-12 form-group">
                            <select class="custom-select" onChange={this.props.handleChange('country')}>
                              <option value="">Select Contary</option>
                              <option value="in">India</option>
                              <option value="us">US</option>
                            </select>
                        </div>

                        <div  className="col-md-6 col-xs-12 form-group">
                            <textarea class="form-control" id="address" rows="4" placeholder="Address" defaultValue={values.address} onChange={this.props.handleChange('address')}></textarea>
                        </div>

                        <div  className="col-md-6 col-xs-12 form-group">
                            <input class="form-control m-b-md" type="text" placeholder="City/state" defaultValue={values.city} onChange={this.props.handleChange('city')} />
                            <input class="form-control" type="text" placeholder="Zip/Postal Code" defaultValue={values.zip} onChange={this.props.handleChange('zip')} />
                        </div>

                        <div  className="col-md-12 col-xs-12 form-group">
                            <textarea class="form-control" id="dfdissiction" rows="4" placeholder="Brief Introduction" defaultValue={values.introduction} onChange={this.props.handleChange('introduction')}></textarea>
                        </div>


                        <div  className="col-md-6 col-xs-12 form-group">
                           <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                        </div>


                        <div  className="col-md-6 col-xs-12 form-group">
                            <input class="form-control" type="number" placeholder="year established" defaultValue={values.year} onChange={this.props.handleChange('year')} />
                        </div>

                        <div  className="col-md-6 col-xs-12 form-group">
                            <input class="form-control" type="text" placeholder="Vat registration Number" defaultValue={values.vet_number} onChange={this.props.handleChange('vet_number')} />
                        </div>


                        <div  className="col-md-6 col-xs-12 form-group">
                            <input class="form-control" type="text" placeholder="Company registration Number" defaultValue={values.reg_number} onChange={this.props.handleChange('reg_number')} />
                        </div>

                        <div  className="col-md-6 col-xs-12 form-group">
                            <input class="form-control" type="text" placeholder="Company accreditations"   defaultValue={values.accreditations} onChange={this.props.handleChange('accreditations')} />
                        </div>


                        <div  className="col-md-6 col-xs-12 form-group">
                            <div class="input-group mb-3">
                              <input type="text" class="form-control" placeholder="add accreditations" />
                              <div class="input-group-append">
                                <span class="input-group-text" id="basic-addon2">Add</span>
                              </div>
                            </div>
                        </div>





                    </div>

                    <button className="btn btn-light m-r-md"  onClick={this.back}>  <i class="fa fa-long-arrow-left" aria-hidden="true"></i>  Back</button>
                    <button className="btn btn-info"  onClick={this.saveAndContinue}> Next  <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </button>

            </div>
        )
    }
}

export default CompanyInfo;