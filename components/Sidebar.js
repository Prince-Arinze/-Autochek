import { RiArrowRightSLine } from 'react-icons/ri';
import { FaStar, FaStarHalf } from 'react-icons/fa';
const Sidebar = ({data}) => {
    console.log(data)
    return (

        <aside>
            <h3 className="search__title">Search here...</h3>
            <form className="border-bottom py-2">
                <div className="form-row">
                    <div className="col-lg-9">
                       <input type="text" className="form-control" placeholder="Product name" />
                    </div>   
                    <div className="col-lg-3" >
                        <button className="btn btn-primary btn__item__search"><RiArrowRightSLine /></button>
                    </div>
                </div>
                {/* <div className="form__border"></div> */}
            </form>
            <div className="border-bottom py-2">
                <h3 className="agileits-sear-head mb-3">Price</h3>
                <div className="search-range">
                    <ul className="text-left">
                        <li><a hre="#">under &#8358;3,000,000</a></li>
                        <li><a hre="#">&#8358;3,000,000 - &#8358;4,500,000</a></li>
                        <li><a hre="#">&#8358;4,500,000 - &#8358;6,000,000</a></li>
                        <li><a hre="#">&#8358;6,000,000 - &#8358;7,500,000</a></li>
                        <li><a hre="#">&#8358;7,500,000 - &#8358;9,000,000</a></li>
                        <li><a hre="#">above  &#8358;9,000,000</a></li>
                    </ul>
                </div>
               
            </div>
            <div className="left-side border-bottom py-2">
                <h3 className="agileits-sear-head mb-3">
                    Discount
                </h3>
                <ul className="text-left discount__check">
                    <li><input type="checkbox" className="checked"/><span>5% or More</span></li>
                    <li><input type="checkbox" className="checked"/><span>10% or More</span></li>
                    <li><input type="checkbox" className="checked"/><span>20% or More</span></li>
                    <li><input type="checkbox" className="checked"/><span>30% or More</span></li>
                    <li><input type="checkbox" className="checked"/><span>50% or More</span></li>
                    <li><input type="checkbox" className="checked"/><span>60% or More</span></li>
                </ul>
            </div>
            <div className="customer-rev border-bottom left-side py-2">
                <h3 className="agileits-sear-head mb-3">Customer Review</h3>
                <ul className="discount__check">
                    <li>
                        <a href="#">
                            <FaStar className="i"/>
                            <FaStar className="i"/>
                            <FaStar className="i"/>
                            <FaStar className="i"/>
                            <FaStar className="i"/>
                        </a>
                         <span>&nbsp;&nbsp;5.0</span></li>
                    <li>
                       <a href="#">
                            <FaStar className="i"/>
                            <FaStar className="i"/>
                            <FaStar className="i"/>
                            <FaStar className="i"/>
                        </a>
                         <span>&nbsp;&nbsp;4.0</span>
                    </li>
                    <li>
                        <a href="#">
                            <FaStar className="i"/>
                            <FaStar className="i"/>
                            <FaStar className="i"/>
                            <FaStarHalf className="i"/>
                        </a>
                         <span>&nbsp;&nbsp;3.5</span>
                    </li>
                    <li>
                        <a href="#">
                            <FaStar className="i"/>
                            <FaStar className="i"/>
                            <FaStar className="i"/>
                        </a>
                         <span>&nbsp;&nbsp;3.0</span>
                    </li>
                    <li>
                        <a href="#">
                            <FaStar className="i"/>
                            <FaStar className="i"/>
                            <FaStarHalf className="i"/>
                        </a>
                        <span>&nbsp;&nbsp;2.5</span>
                    </li>
                </ul>
            </div>
            <div className="left-side border-bottom py-2">
                <h3 className="agileits-sear-head mb-3">
                    Cars
                </h3>
                { data.makeList.map(data => (
                     <ul className="text-left discount__check" key={data.id}>
                       <li><input type="checkbox" className="checked"/><span>{data.title}</span></li>
                     </ul>
                  ))
                   
                }
            </div>
        </aside>
           

    )
}

export default Sidebar;