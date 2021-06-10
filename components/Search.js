import { FaCartArrowDown } from 'react-icons/fa'
const Search = () => {
    return (
        <div className="search-container">
            <div className="brand-name"><img  src="/car-logo.png" alt="car-logo" className="car-logo"/><h2>Cars Store</h2></div>
            <div className="search-section">
            <form  className="search-form">
                <input type="text" placeholder="search" className="form-input"/>
                <button type="button" className="search-btn">Search</button>
            </form>
            <span className="cart-search"><FaCartArrowDown /></span>
            </div>
        </div>
    )
}

export default Search;