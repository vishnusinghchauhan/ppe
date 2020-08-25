import React, { Component } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import { addSingleProduct , imageUpload} from '../../Actions/StockAction';

import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";



class AddStock extends React.Component {

    constructor() {
        super();
         this.state = {
            catagories:['Apple', 'Server'],
            selectedSubcategoryOption:[],
            selectedCategory:'',
            selectedSubCategory:'',
            title:'',
            brand:'',
            model:'',
            quantity:'',
            price:'',
            condition:'',
            currency:'',
            description:'',
            tabs: 1,
            file: null
        };
        this.submitProduct = this.submitProduct.bind(this); 
        this.onImageChange = this.onImageChange.bind(this);
    }

     toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
    getCategories(){
        let items = [];   
        var catagoriesData = this.state.catagories;
        catagoriesData.forEach((item)=>{
              items.push(<option key={item} value={item}>{item}</option>);   
        })      
        return items;
    }
    getSubCategories(){
        let items = [];   
        var subCatagoriesData = this.state.selectedSubcategoryOption;
        subCatagoriesData.forEach((item)=>{
              items.push(<option key={item} value={item}>{item}</option>);   
        })      
        return items;
    }
    onCategoryChange(e){
        var selected = e.target.value;
        this.setState({selectedCategory:selected})
        if(selected == "Apple"){
           this.setState({selectedSubcategoryOption:['iphone', 'Mac', 'Ipad'] }) 
        }else if(selected == "Server"){
           this.setState({selectedSubcategoryOption:['Server', 'Server CPU', 'Server meem'] }) 
        }else{
           this.setState({selectedSubcategoryOption:[] }) 
        }
    }
    onSubCategoryChange(e){
        var selected = e.target.value;
        this.setState({selectedSubCategory:selected}) 
    }

    submitProduct(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        this.props.imageUpload(formData, config).then((data)=>{
          console.log("imageUpload ......", data)
           var productObj = {
               company_id: this.props && this.props.user && this.props.user.userInfo._id,
               category: this.state.selectedCategory,
               sub_category:this.state.selectedSubCategory,
               title:this.state.title,
               brand:this.state.brand,
               model:this.state.model,
               quantity:this.state.quantity,
               price:this.state.price,
               condition:this.state.condition,
               currency:this.state.currency,
               description:this.state.description,
               product_img:data.data.data.filename
            }
            console.log("yooyoyoyoyoy...")
             this.props.addSingleProduct(productObj);
        }).catch((err)=>{
           console.log("Error while upload image")
        })
       
    }
    onImageChange(e) {
        this.setState({file:e.target.files[0]});
    }

render() {
	 return (
        <div className="stock-list">
            <div className="gray-container">
              <div className="container">
                  <div className="nav-wrapper">
                    <Nav
                      className="nav-fill flex-column flex-md-row"  id="tabs-icons-text"  pillsrole="tablist" >
                      <NavItem>
                        <NavLink
                          aria-selected={this.state.tabs === 1}
                          onClick={e => this.toggleNavs(e, "tabs", 1)}
                          href="#pablo"
                          role="tab"
                        > <b> Add Single product </b> 
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          aria-selected={this.state.tabs === 2}
                          onClick={e => this.toggleNavs(e, "tabs", 2)}
                          href="#pablo"
                          role="tab"
                        ><b> Add Bulk product </b> 
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                  <Card className="add-product-box">
                    <CardBody>
                      <TabContent activeTab={"tabs" + this.state.tabs}>
                        <TabPane tabId="tabs1">
                            <div className="row">
                                <div  className="col-md-6 col-xs-12 form-group">
                                    <select className="custom-select" onChange={this.onCategoryChange.bind(this)}>
                                        <option value=""> Select Category </option>
                                        {this.getCategories()}
                                    </select>
                                </div>
                                {this.state.selectedSubcategoryOption && this.state.selectedSubcategoryOption.length > 0 &&
                                <div  className="col-md-6 col-xs-12 form-group">
                                    <select className="custom-select" onChange={this.onSubCategoryChange.bind(this)} >
                                    <option value=""> Select Sub Category </option>
                                     {this.getSubCategories()}
                                    </select>
                                </div>
                                }
                                <div className="clearfix" /> 
                                <div  className="col-md-12 col-xs-12 form-group">
                                    <input className="form-control" type="text" placeholder="Title"   onChange={e => this.setState({ title: e.target.value })} />
                                </div>
                                <div  className="col-md-6 col-xs-12 form-group">
                                    <input className="form-control" type="text" placeholder="Brand"   onChange={e => this.setState({ brand: e.target.value })} />
                                </div>
                                <div  className="col-md-6 col-xs-12 form-group">
                                    <input className="form-control" type="text" placeholder="Model"   onChange={e => this.setState({ model: e.target.value })} />
                                </div>
                                <div  className="col-md-6 col-xs-12 form-group">
                                    <input className="form-control" type="number" placeholder="Quantity"   onChange={e => this.setState({ quantity: e.target.value })} />
                                </div>
                                <div  className="col-md-6 col-xs-12 form-group">
                                    <input className="form-control" type="number" placeholder="Price"   onChange={e => this.setState({ price: e.target.value })} />
                                </div>
                                <div  className="col-md-6 col-xs-12 form-group">
                                    <select className="custom-select"  onChange={e => this.setState({ condition: e.target.value })} >
                                      <option value="">Condition</option>
                                      <option value="New">New</option>
                                      <option value="NewOther">New Other</option>
                                      <option value="Used">Used</option>
                                      <option value="Graded">Graded</option>
                                      <option value="Refurbished">Refurbished</option>
                                      <option value="ForParts">For Parts</option>
                                    </select>
                                </div>
                                 <div  className="col-md-6 col-xs-12 form-group">
                                    <select className="custom-select"  onChange={e => this.setState({ currency: e.target.value })} >
                                      <option value="">Currency</option>
                                      <option value="GBP">GBP</option>
                                      <option value="USD">USD</option>
                                      <option value="EUR">EUR</option>
                                    </select>
                                </div>
                                <div  className="col-md-6 col-xs-12 form-group">
                                    <input type="file" className="form-control-file"  onChange= {this.onImageChange} />
                                </div>
                                <div  className="col-md-12 col-xs-12 form-group">
                                    <textarea className="form-control" id="address" rows="4" placeholder="description" onChange={e => this.setState({ description: e.target.value })} ></textarea>
                                </div>
                                <div  className="col-md-12 col-xs-12 form-group">
                                    <button className="btn btn-info"  onClick={this.submitProduct}> Submit </button>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="tabs2">
                            <div className="row">
                                <div  className="col-md-6 col-xs-12 form-group">
                                    <select className="custom-select" onChange={this.onCategoryChange.bind(this)}>
                                        <option value=""> Select Category </option>
                                        {this.getCategories()}
                                    </select>
                                </div>
                                {this.state.selectedSubcategoryOption && this.state.selectedSubcategoryOption.length > 0 &&
                                <div  className="col-md-6 col-xs-12 form-group">
                                    <select className="custom-select" onChange={this.onSubCategoryChange.bind(this)} >
                                    <option value=""> Select Sub Category </option>
                                     {this.getSubCategories()}
                                    </select>
                                </div>
                                }
                            </div>
                             upload product by file remaining...!
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
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
    addSingleProduct: (data) => dispatch(addSingleProduct(data)),
    imageUpload: (formData, config) => dispatch(imageUpload(formData, config))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddStock);
