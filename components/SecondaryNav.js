import Link from 'next/link'
import { FaShoppingCart, FaMapMarker, FaPhone, FaTruck, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

import { Button } from 'reactstrap'

const SecondaryNav = () => {
      return (
          <div className="secondary">
               <div className="container-nav">
                    <div className="left-item"><Link href="/"><a> Offer Zone Top Deals and Discounts <FaShoppingCart className="fa-icon"/></a></Link></div>
                    <div className="right-item">
                        <ul>
                            <li><Link href="/location"><a className="border-right"><FaMapMarker className="fa-icon"/> Select Location</a></Link></li>
                            <li><Link href="/track"><a  className="border-right"> <FaTruck  className="fa-icon"/> Track Order</a></Link></li>
                            <li><Link href="#"><a  className="border-right"> <FaPhone  className="fa-icon"/> 08138602173</a></Link></li>
                            <li><Link href="#"><a  className="border-right"> <FaSignInAlt  className="fa-icon"/> Log In</a></Link></li>
                            <li><Link href="#"><a><FaSignOutAlt  className="fa-icon"/> Register</a></Link></li>
                        </ul>
                    </div>
                </div>
          </div>
      )
}


export default SecondaryNav;