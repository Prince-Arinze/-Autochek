import Search from "./Search"
import SecondaryNav from "./SecondaryNav"

const Layout = ({children}) => {
    return (
        <div>
            <SecondaryNav />
            <Search />
            { children }
        </div>
    )
}

export default Layout;