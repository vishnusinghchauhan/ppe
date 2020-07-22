import React, { Component } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import { getAllPendingProducts , getAllCompanies } from '../../Actions/StockAction';




class Dashboard extends React.Component {

	constructor() {
        super();
         this.state = {
          activePage: 1,
          pageLimit:8,
          company_by_company:'',
          company_by_title:''
        };
        this.handeCompanyChange = this.handeCompanyChange.bind(this); 
        this.handleKeyUp = this.handleKeyUp.bind(this); 
    }

	componentDidMount() {
      var filterObj = {} 
      filterObj.pageIndex =  this.state.activePage;
      filterObj.pageLimit= this.state.pageLimit;
      filterObj.company_by_company= this.state.company_by_company;
      filterObj.company_by_title= this.state.company_by_title;
      this.props.getAllPendingProducts(filterObj);
      this.props.getAllCompanies();
    }


    getCompaniesList(){
        let items = [];   
         var companiesList = this.props && this.props.stock && this.props.stock.companyList

        companiesList.forEach((item)=>{
        	if(item.name !== "Super" && item.name !== ""){
              items.push(<option key={item.name} value={item._id}>{item.name}</option>);   
        	}
        })      
        return items;
    }
    handleKeyUp(e){
    	this.setState({ company_by_title: e.target.value}, ()=>{
		      var filterObj = {} 
		      filterObj.pageIndex =  this.state.activePage;
		      filterObj.pageLimit= this.state.pageLimit;
		      filterObj.company_by_company= this.state.company_by_company;
		      filterObj.company_by_title= this.state.company_by_title;
		      this.props.getAllPendingProducts(filterObj);
    	})
    }

    handeCompanyChange(e){
    	this.setState({ company_by_company: e.target.value}, ()=>{
		      var filterObj = {} 
		      filterObj.pageIndex =  this.state.activePage;
		      filterObj.pageLimit= this.state.pageLimit;
		      filterObj.company_by_company= this.state.company_by_company;
		      filterObj.company_by_title= this.state.company_by_title;
		      this.props.getAllPendingProducts(filterObj);
    	})
    }

render() {
  var pendingProducts = this.props && this.props.stock && this.props.stock.pendingProducts
  console.log("pendingProducts", pendingProducts)


	 return (
	     <div className="gray-container">
                <div className="container">
	                <div className="home-container">

	                	<div className="row">
	                		<div className="col-md-3 m-b-md">
								<select class="custom-select" id="company_by_company" onChange={this.handeCompanyChange}>
					                <option value="">Company</option>
					                 {this.getCompaniesList()}
					            </select>
				            </div>

				            <div className="col-md-3 m-b-md">
              					<input type="text" placeholder="Search by title" class="form-control" id="company_by_title"  onKeyUp={this.handleKeyUp} />
				            </div>
	                	</div>

	                	<div className="row">
	                	<div className="col-md-12 m-b-md">
						<table class="table table-striped table-bordered">
						  <thead>
						    <tr>
						      <th scope="col">Company</th>
						      <th scope="col">Email</th>

						      <th scope="col">Category</th>
						      <th scope="col">Sub Category</th>
						      <th scope="col">Quantity</th>
						      <th scope="col">Price</th>
						      <th scope="col">Title</th>
						      <th scope="col">Action</th>
						    </tr>
						  </thead>
						  <tbody>
						   {pendingProducts.length > 0 && pendingProducts.map((product, index) => (
						    <tr key={index}>
						      <td >{product.company_id.name}</td>
						      <td >{product.company_id.email}</td>
						      <td>{product.category}</td>
						      <td>{product.sub_category}</td>
						      <td>{product.quantity}</td>
						      <td>{product.price}</td>
						      <td className="truncate"  title={product.title} >{product.title}</td>
						      <td>
								<div class="btn-group" role="group" aria-label="Basic example">
								  <button type="button" class="btn btn-info btn-sm"><i class="fa fa-check" aria-hidden="true"></i> Approve</button>
								  <button type="button" class="btn btn-info btn-sm"><i class="fa fa-times" aria-hidden="true"></i> Not Approve</button>
								</div>
						      </td>
						    </tr>
						     ))} 
						  </tbody>
						</table>
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
      stock: state.stock,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAllPendingProducts: (filterObj) => dispatch(getAllPendingProducts(filterObj)),
    getAllCompanies: () => dispatch(getAllCompanies())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);