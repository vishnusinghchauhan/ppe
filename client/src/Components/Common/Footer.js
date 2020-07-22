import React from 'react';
import {BrowserRouter as Route, Link} from "react-router-dom";

class Footer extends React.Component {
	constructor(props) {
      super(props);
      this.state = {
      };
    }
  render() {
	 return (
        <footer>
       <div className="container">
            <div className="row">
                <div className="col-md-3 col-xs-12">
                  <img src="logo.png" alt="logo"  className="m-b-md"  />
                  <p className="footer-desc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
                </div>
                 <div className="col-md-3 col-xs-12">
                    <h4 className="footer-heading"> Company </h4>
                      <ul  className="footer-menu">
                        <li> <Link to="#"> Link </Link> </li>
                        <li> <Link to="#"> Link </Link> </li>
                        <li> <Link to="#"> Link </Link> </li>
                        <li> <Link to="#"> Link </Link> </li>
                        <li> <Link to="#"> Link </Link> </li>
                      </ul>
                </div>
                 <div className="col-md-3 col-xs-12">
                    <h4 className="footer-heading"> Services </h4>
                      <ul className="footer-menu">
                        <li> <Link to="#"> Link </Link> </li>
                        <li> <Link to="#"> Link </Link> </li>
                        <li> <Link to="#"> Link </Link> </li>
                        <li> <Link to="#"> Link </Link> </li>
                        <li> <Link to="#"> Link </Link> </li>
                      </ul>
                </div>
                 <div className="col-md-3 col-xs-12">
                  <h6 className="footer-heading"> Want ot know about our offers first? </h6>
                  <h4 className="footer-new-heading"> Subscribe Our Newsletter </h4>
                  <p className="footer-desc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Email address" />
                    <div class="input-group-append">
                      <button class="btn btn-secondary" type="button">
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
            </div>


            <div className="row">
              <div className="col-md-2 col-xs-12">
                  <div className="social-icon">
                      <ul class="list-inline">
                          <li class="list-inline-item"><Link to="#"><i class="fa fa-facebook" aria-hidden="true"></i></Link></li>
                          <li class="list-inline-item"><Link to="#"><i class="fa fa-twitter" aria-hidden="true"></i></Link></li>
                          <li class="list-inline-item"><Link to="#"><i class="fa fa-pinterest-p" aria-hidden="true"></i></Link></li>
                          <li class="list-inline-item"><Link to="#"><i class="fa fa-youtube" aria-hidden="true"></i></Link></li>
                      </ul>
                   </div>
              </div>
              <div className="col-md-10 col-xs-12">
                   <p className="copy-right"> All right Reserved @ 2019 </p>
              </div>

            </div>
        </div>
        </footer>
      )
	}
}

export default Footer;
