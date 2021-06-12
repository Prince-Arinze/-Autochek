import Footer from "./Footer"
import Jumbotron from "./JumboTron"
import OwnerTag from "./OwnerTag"
import PaymentMethod from "./PaymentMethod"
import Search from "./Search"
import SecondaryFooter from "./SecondaryFooter"
import SecondaryNav from "./SecondaryNav"

const Layout = ({children}) => {
    return (
        <div>
            <SecondaryNav />
            <Search />
            { children }
            <Jumbotron />
            <Footer />
            <SecondaryFooter />
            <PaymentMethod />
            <OwnerTag />
        </div>
    )
}

export default Layout;