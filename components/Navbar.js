import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle
} from 'reactstrap';
import {useRouter} from 'next/router'
import Select from './Select';

import navStyles from '../styles/NavStyle.module.css';
import DropDowns from './Dropdown';

const Navbars = ({data, products}) => {
  const router = useRouter()
  const isActive = (route) => {
    return route === router.pathname ? `${navStyles.activate}` : '';
}

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="fluid nav-bg">
      <Navbar color="light" light expand="md" className="container">
          <Select data={data}/>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/" className={`${isActive("/")}`}>Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Cars
              </DropdownToggle>
              {/* <DropdownMenu right> */}
                 <DropDowns products={products}/>
              {/* </DropdownMenu> */}
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/about" className={`${isActive("/about")}`}>About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact" className={`${isActive("/contact")}`}>Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbars;
