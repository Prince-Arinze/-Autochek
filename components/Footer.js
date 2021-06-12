import { FaDolly, FaShippingFast, FaThumbsUp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="footer-top-first">
                <div className="container py-md-5 py-sm-4 py-3">
                    <h2 className="footer-top-head font-weight-bold mb-2">
                        Cars
                    </h2>
                    <p className="footer-main mb-4">
                    
                        If you're considering a new car, looking for a powerful new car stereo or shopping for a a tokunbo car, we make it easy to
                        find exactly what you need at a price you can afford. We offer Every Day Low Prices on cars, lorries, trucks and pick ups.
                    </p>
                    <div className="row grids-footer border-top border-bottom py-sm-4 py-3">
                        <div className="col-md-4 offer-footer">
                            <div className="row">
                                <div className="col-4 i icon-fot">
                                    <FaDolly />
                                </div>
                                <div className="col-8 text-form-footer">
                                    <h3>Free Shipping</h3>
                                    <p>on orders over &#8358;1,000,000</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 offer-footer my-md-0 my-4">
                            <div className="row">
                                <div className="col-4 i icon-fot">
                                    <FaShippingFast />
                                </div>
                                <div className="col-8 text-form-footer">
                                    <h3>Fast Delivery</h3>
                                    <p>World Wide</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 offer-footer my-md-0 my-4">
                            <div className="row">
                                <div className="col-4 i icon-fot">
                                    <FaThumbsUp />
                                </div>
                                <div className="col-8 text-form-footer">
                                    <h3>Big Choice</h3>
                                    <p>of Products</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;