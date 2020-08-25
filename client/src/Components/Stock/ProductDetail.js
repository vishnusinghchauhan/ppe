import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductDeatail, sendProductInquiry } from '../../Actions/StockAction';


class ProductDetail extends React.Component {

    constructor() {
        super();
          this.state = {
        };
        this.sendInquiry = this.sendInquiry.bind(this); 
    }

    componentDidMount() {
      var productId = this.props.location &&  this.props.location.state &&  this.props.location.state.productID
      this.props.getProductDeatail(productId);
    }
    sendInquiry(e){
      console.log("aaabbbb", e.target.id)
      this.props.sendProductInquiry(e.target.id);
    }

render() {
  var productDetails = this.props && this.props.stock && this.props.stock.productDetails;
  console.log("productDetails...",productDetails)
	 return (
        <div className="stock-list">
            <div className="gray-container">
              <br ></br>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-xs-12">
                            <div className="product-img border-padding-15">
                              <img src={`uploads/${productDetails.product_img}`} alt="" />
                            </div>
                        </div>
                        <div className="col-md-8 col-xs-12">
                            <h2 className="product-detail-heading"> {productDetails.title} </h2>
                            <p className="product_info">
                              <span className="left" > Category </span> :
                              <span className="right"> {productDetails.category}</span> 
                            </p>

                             <p className="product_info">
                              <span className="left" > Brand </span> :
                              <span className="right"> {productDetails.brand}</span> 
                            </p>

                             <p className="product_info">
                              <span className="left" > Model </span> :
                              <span className="right"> {productDetails.model}</span> 
                            </p>

                             <p className="product_info">
                              <span className="left" > Condition </span> :
                              <span className="right"> {productDetails.condition}</span> 
                            </p>

                             <p className="product_info">
                              <span className="left" > Quantity </span> :
                              <span className="right"> {productDetails.quantity}</span> 
                            </p>

                             <p className="product_info">
                              <span className="left" > Price </span> :
                              <span className="right"> {productDetails.price}</span> 
                            </p>

                             <p className="product_info">
                              <span className="left" > Description </span> :
                              <span className="right"> {productDetails.description}</span> 
                            </p>
                        </div>
                	 </div>
                   <br />
                   <div className="row">
                        <div className="col-md-4 col-xs-12">
                            {/* <div className=" border-padding-15 text-center">
                                <img src="blank-product.jpg" alt="" className="m-b-xs" />
                                <h5 className="text-info" > Company Name </h5>
                                <p> 08:07 am Same time zone</p> 
                                <div> Rating 0.0 (0 Reviews)</div> 
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star-half-o" aria-hidden="true"></i>
                            </div> */}
                        </div>
                        <div className="col-md-8 col-xs-12">
                            <div className="border-padding-15">
                              <h5 className="text-info" > Send inquery about this stock item </h5>
                              <textarea class="form-control m-b-md" id="address" rows="4" placeholder="Address"  ></textarea>
                              <button className="btn btn-info m-r-md" id={productDetails._id} onClick={this.sendInquiry}>  <i class="fa fa-long-arrow-left" aria-hidden="true"></i>  Send Inquiry</button>
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
    stock: state.stock
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getProductDeatail: (productId) => dispatch(getProductDeatail(productId)),
    sendProductInquiry: (productId) => dispatch(sendProductInquiry(productId))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);