import Jumbotron from "./JumboTron"
import Search from "./Search"
import SecondaryNav from "./SecondaryNav"

const Layout = ({children}) => {
    return (
        <div>
            <SecondaryNav />
            <Search />
            { children }
            <Jumbotron />
        </div>
    )
}

export default Layout;