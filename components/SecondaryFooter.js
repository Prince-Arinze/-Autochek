import { FaMapMarker, FaMobile, FaPhone, FaEnvelopeOpen, FaFacebookF, FaTwitter, FaGooglePlusG } from 'react-icons/fa'
const SecondaryFooter = () => {
    return (
        <div className="middlefooter-sec">
            <div className="container py-md-5 py-sm-4 py-3">
                <div className="row footer-info w3-agileits-info">
                    <div className="col-md-3 col-sm-6 footer-grids">
                        <h3 className="text-white font-weight-bold mb-3">Category</h3>
                        <ul>
                            <li className="mb-3 text-left"><a href="#">Cars</a></li>
                            <li className="mb-3 text-left"><a href="#">Sport Cars</a></li>
                            <li className="mb-3 text-left"><a href="#">SUVs</a></li>
                            <li className="mb-3 text-left"><a href="#">Hilux</a></li>
                            <li className="mb-3 text-left"><a href="#">Van</a></li>
                            <li className="mb-3 text-left"><a href="#">Lorry</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6 footer-grids mt-sm-0 mt-4">
                        <h3 className="text-white font-weight-bold mb-3">Quick Links</h3>
                        <ul>
                            <li className="mb-3 text-left"><a href="#">About Us</a></li>
                            <li className="mb-3 text-left"><a href="#">Contact Us</a></li>
                            <li className="mb-3 text-left"><a href="#">Help</a></li>
                            <li className="mb-3 text-left"><a href="#">Faqs</a></li>
                            <li className="mb-3 text-left"><a href="#">Terms of use</a></li>
                            <li className="mb-3 text-left"><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6 footer-grids mt-md-0 mt-4">
                        <h3 className="text-white font-weight-bold mb-3">Get in Touch</h3>
                        <ul>
                            <li className="mb-3 text-left"><a href="#"><FaMapMarker className="i"/>No 2, Nnewi Street </a></li>
                            <li className="mb-3 text-left"><a href="#"><FaMobile  className="i"/> +2348138602172</a></li>
                            <li className="mb-3 text-left"><a href="#"><FaPhone className="i"/>+2348138602172</a></li>
                            <li className="mb-3 text-left"><a href="mailto:princendu98@gmail.com"><FaEnvelopeOpen className="i"/>princendu98@gmail.com</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6 footer-grids mt-md-0 mt-4 footer-form">
                        <h3 className="text-white font-weight-bold mb-3">Newsletter</h3>
                        <p>Free Delivery on your first order!</p>
                        <form className="footer-form-group">
                            <div className="form-group">
                               <input type="email" className="form-control" placeholder="email" />
                               <input type="submit" value="Go" className="footer-form-btn"/>
                           </div>
                        </form>
                         <div className="footer-grids w3l-socialmk mt-3">
                             <h3 className="text-white font-weight-bold mb-3">Follow Us on</h3>
                             <div className="social">
                                 <div className="row">
                                     <div className="col-sm-2"><span className="facebook"><FaFacebookF className="icon fb"/></span></div>
                                     <div className="col-sm-2">
                                         <span className=" twitter">< FaTwitter className="icon tw"/></span></div>
                                     <div className="col-sm-2">
                                         <span className="google">
                                             <FaGooglePlusG className="icon gp"/>
                                         </span>
                                    </div>
                                          
                                 </div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SecondaryFooter;