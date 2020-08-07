import React, {Component} from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">CFProblemBrowser</NavbarBrand>
                <NavbarToggler onClick={this.toggleNav} />
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <div className="mr-auto"></div>
                    <div className="text-white">Follow me on: </div>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/twitter">Twitter</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/github">Github</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Header;
