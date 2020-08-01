import React, { Component } from 'react';
import axios from "axios";
import { UncontrolledCarousel } from "reactstrap";
import { connect } from 'react-redux';
import { getStockList } from '../../Actions/StockAction';

const items = [
  {
    src: "testimonial-bg.jpg",
    altText: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    caption: 'Vishnu',
    header: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  },
  {
    src: "testimonial-bg.jpg",
    altText: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    caption: 'raj',
    header: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  }
];



class Home extends React.Component {

	constructor() {
        super();
         this.state = {
          activePage: 1,
          pageLimit:12,
          search_category:'',
          search_item:''
        };
    }
    componentDidMount() {
      var filterObj = {} 
          filterObj.pageIndex =  this.state.activePage;
          filterObj.pageLimit= this.state.pageLimit;
      this.props.getStockList(filterObj);
    }


render() {
	var productList = this.props && this.props.stock && this.props.stock.productList;
    var stockCounts = this.props && this.props.stock && this.props.stock.productTotal;
    console.log("utddddddd", productList)

	 return (
	     <div>
	     		<div className="top-home">	
		     			<div className="row">
		     				<div className="col-md-6 col-xs-12">
		     				</div>
			     			<div className="col-md-6 col-xs-12">
			     				<div className="home-banner">
			     				<h2 className="banner-heading"> Itroducing infoNet Router </h2>
			     				<h2 className="banner-sub"> Start from $36.00 </h2>
			     				<p className="benner-info">-It was popularised in the 1960s with the release of Letraset sheets containing. It was popularised in the 1960s with the release of Letraset sheets containing </p>
	    						
	    						<button type="submit" className="btn btn-warning">Write us to know more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
			     				</div>
			     			</div>
		     			</div>
		     			<div className="banner-footer">
			     			<div className="container">	
			     				<div className="row">
			     					<div className="tcell">
			     					<div className="col-xs-12 col-md-2 benner-icon">
			     						<img src="global-network-icon.png" alt=" "/>
			     						<div className="benner-footer-info"> Low cost $ <br/> Global and Network </div>
			     					</div>
			     					<div className="col-xs-12 col-md-2 benner-icon">
			     						<img src="verified-members-icon.png" alt=" "/>
			     						<div  className="benner-footer-info"> Varified <br/> members </div>
			     					</div>
			     					<div className="col-xs-12 col-md-2 benner-icon">
										<img src="value-added-services-icon.png" alt=" "/>
			     						<div  className="benner-footer-info"> value added <br/> services </div>
			     					</div>
			     					<div className="col-xs-12 col-md-2 benner-icon">
										<img src="trade-safe-code-icon.png" alt=" "/>
										<div  className="benner-footer-info"> Trade safe <br/> code </div>
			     					</div>
			     					<div className="col-xs-12 col-md-2 benner-icon">
										<img src="public-sector-icon.png" alt=" "/>
										<div  className="benner-footer-info"> Public<br/> Sector </div>
			     					</div>
			     					<div className="col-xs-12 col-md-2 benner-icon">
										<img src="logistic-solution-icon.png" alt=" "/>
										<div  className="benner-footer-info"> logistic<br/>solution </div>
			     					</div>
			     					</div>
			     				</div>
			     			</div>
		     			</div>
	     		</div>

                <div className="container">
	                <div className="home-container">
	                	<div className="top">
	                		<h3 className="text-center text-head"> Our latest stock </h3>
	                		<p className="text-center"> Only thing you need to change is Solr port if you have already previous version of Solr running on port 8983. I have incremented it by on </p>
	                	</div>
	                </div>
		     		<div className="row">
	                    {productList.length > 0 && productList.map((product, index) => (
	                      <div className="col-md-3 col-xs-12 m-b-md" key={index}>
	                        <div className="home product-box"  >
                            	<img src={`uploads/${product.product_img}`} alt="" id={product._id}  />
	                            <h4  className="truncate product-list-haeding " title={product.title}  > {product.title} </h4>
	                            <div className="list-cmp-Name-home"> {product.company_id.name} </div> 
	                            <h5 className="text-info m-b-n price-haeding"> <span>Price : </span>  $ {product.price} </h5>
	                        </div>
	                      </div>
	                    ))} 
	                    {productList.length <= 0 &&
	                      <div className="col-md-12 col-xs-12">
	                      <h4 className="text-center text-info"> No any Product found.! </h4>
	                      </div>
	                    }
                
                		<div  className="view-all-home">
							<button type="button" class="btn btn-warning">View All</button>
						</div>
	                   
	                  </div>
                </div>

                <div className="testinomial-home testnimonial">
                	<h4 className="text-center text-warning"> What Our Clint Says </h4>
               		<UncontrolledCarousel items={items} />
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);