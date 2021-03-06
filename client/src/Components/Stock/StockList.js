import React, { Component } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import { getStockList } from '../../Actions/StockAction';
import ReactPagination from "react-js-pagination";
import {Link} from "react-router-dom";


class StockList extends React.Component {

    constructor() {
        super();
         this.state = {
          activePage: 1,
          pageLimit:8,
          search_category:'',
          search_item:'',
          displayProductCount : 0
        };
        this.getProductInfo = this.getProductInfo.bind(this); 
        this.searchProduct = this.searchProduct.bind(this); 
        this.onInputChange = this.onInputChange.bind(this); 
    }
    componentDidMount() {
      var filterObj = {} 
          filterObj.pageIndex =  this.state.activePage;
          filterObj.pageLimit= this.state.pageLimit;
          this.props.getStockList(filterObj);
    }
    getProductInfo(e){
      var productId = e.target.id
      console.log("productIdproductId", productId)
      this.props.history.push({
        pathname: "/stock-product-detail",
        state: {  productID: productId }
      });
    }
    handlePageChange(pageNumber) {
      console.log("handlePageChangehandlePageChange", pageNumber)
     this.setState({activePage: pageNumber}, function(){
                var filterObj = {} 
                filterObj.pageIndex =  this.state.activePage;
                filterObj.pageLimit= this.state.pageLimit;
                filterObj.search_item =this.state.search_item;
                filterObj.search_category = this.state.search_category
                this.props.getStockList(filterObj);
          });
    }

    searchProduct(){
       var filterObj = {} 
            filterObj.pageIndex =  this.state.activePage;
            filterObj.pageLimit= this.state.pageLimit;
            filterObj.search_item =this.state.search_item;
            filterObj.search_category = this.state.search_category
            this.props.getStockList(filterObj);
    }
    onInputChange(e){
      this.setState({search_item: e.target.value}, function(){
        this.searchProduct()
      })
    }

    getProductCount(){
      //this.setState({ displayProductCount :  this.props && this.props.stock && this.props.stock.productList.length})
      return  this.props && this.props.stock && this.props.stock.productList.length
    }

render() {
  var productList = this.props && this.props.stock && this.props.stock.productList;
  var stockCounts = this.props && this.props.stock && this.props.stock.productTotal;

	 return (

          <div className="stock-list">
          



      <div className="top-list">
            <div className="top-list-srch">
            <div className="input-group">
              <span className="dropIcon"></span>
              <div className="input-group-prepend">
                <select className="custom-select left-radius right-border height50 border-none select-yellow" onChange={e => this.setState({ search_category: e.target.value })}>
                <option selected value="">All Category</option>
                <option value="Apple">Apple</option>
                <option value="Server">Server</option>
              </select>
              </div>
              <input type="text" className="form-control right-border height50 border-none"  onChange={this.onInputChange} />
              <div className="input-group-append">
                <button className="btn btn-light-blue border-radius-n" type="button"  onClick={this.searchProduct} >Search</button>
              </div>
            </div>
            </div>
            </div>


          <div className="product-container">
            <div className="container">
              <div className="home-container">
                      <div className="top">
                        <h3 className="text-center text-head list"> Our stock </h3>
                        <p className="text-center">
                         Only thing you need to change is Solr port if you have already previous version of Solr running on port 8983. I have incremented it by on 
                         Only thing you need to change is Solr port if you have already previous version of Solr running on port 8983. I have incremented it by on 
                         </p>
                      </div>
                	 </div>

                   <div className="top-filter">
                      <div className="row">
                          <div className="col-xs-12 col-md-6">
                            <div className="list-total-count">  All Select  | {this.getProductCount()} out of : {stockCounts} </div> 
                          </div>
                          <div className="col-md-6 col-xs-12 pull-right" align="right" >
                            <ul className="nav float-lg-right">
                              <li className="nav-item">
                                  View <i class="fa fa-th" aria-hidden="true"></i>
                              </li>
                              <li className="nav-item p-l-md">
                                  Filter <i class="fa fa-filter" aria-hidden="true"></i>
                              </li>
                            </ul>
                          </div>
                      </div>
                   </div>

                  <div className="row">
                    {productList.length > 0 && productList.map((product, index) => (
                      <div className="col-md-3 col-xs-12 m-b-md" key={index}>
                        <div className="product-box"  >
                            <img src={`uploads/${product.product_img}`} alt="" id={product._id} onClick={this.getProductInfo} className="m-b-md" />
                            <div className="list-data">
                            <div><span class="badge badge-ppe">{product.category}</span></div>
                            <h4  className=" product-list-haeding" title={product.title} > {product.title} </h4>
                            <div className="list-cmp-Name"> {product.company_id.name} </div> 
                            <h5 className="text-info m-b-n price-haeding"> $ {product.price} </h5>
                            <div className="light-blue"> In-stock : {product.quantity} </div>
                            </div>
                        </div>
                      </div>
                    ))} 

                    {productList.length <= 0 &&
                      <div className="col-md-12 col-xs-12">
                      <h4 className="text-center text-info"> No any Product found.! </h4>
                      </div>
                    }
                  </div>


                <div className="row">
                  <div className="col-xs-12 col-md-12">
                  <div className="paginationTop">
                    <ReactPagination
                      activePage={this.state.activePage}
                      itemsCountPerPage={this.state.pageLimit}
                      totalItemsCount={stockCounts}
                      pageRangeDisplayed={5}
                      onChange={this.handlePageChange.bind(this)}
                    />
                    </div>
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
    getStockList: (filterObj  ) => dispatch(getStockList(filterObj))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StockList);