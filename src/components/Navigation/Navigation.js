import React from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem } from 'reactstrap';

import { NavLink, Link } from 'react-router-dom';

import './Navigation.css';

export default class Navigation extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.openDropdown = this.openDropdown.bind(this);
		this.closeDropdown = this.closeDropdown.bind(this);
		this.state = {
			isOpen: false,
			dropdownOpen: false
		};
	}

	toggle() {
		this.setState(prevState => ({
			isOpen: !this.state.isOpen,
			dropdownOpen: !prevState.dropdownOpen
		}));
	}

	openDropdown() {
		this.setState({dropdownOpen: true})
	}

	closeDropdown() {
		this.setState({dropdownOpen: false})
	}

	render() {
		return (
		<div className='navigation'>
			<Navbar className="navbar" light expand="md">
			<Link to='/'>
				<NavbarBrand href="/">
					<img className="logo" src={require('../../images/Logo.png')}/>
				</NavbarBrand>
			</Link>
			<NavbarToggler onClick={this.toggle} />
			<Collapse className="navbar-collapse" isOpen={this.state.isOpen} navbar>
				<Nav className="ml-auto" navbar>
					<NavItem>
						<NavLink className="navbar-link" to="/about/">
							<h1><strong>ABOUT</strong></h1>
						</NavLink>
					</NavItem>
					<UncontrolledDropdown onMouseOver={this.openDropdown} onMouseLeave={this.closeDropdown} isOpen={this.state.dropdownOpen} nav inNavbar>
						<DropdownToggle nav>
							<NavLink className="navbar-link" to="/event/">
								<h1><strong>EVENTS</strong></h1>
							</NavLink>
						</DropdownToggle>
						<DropdownMenu right>
							<DropdownItem>
								<NavLink className="navbar-link navbar-dropdown" to="/event/pre-event">
									<h1><strong>PRE-EVENTS</strong></h1>
								</NavLink>
							</DropdownItem>
							<DropdownItem>
								<NavLink className="navbar-link navbar-dropdown" to="/event/main-event">
									<h1><strong>MAIN EVENTS</strong></h1>
								</NavLink>
							</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
					<NavItem>
						<NavLink className="navbar-link" to="/competition/">
							<h1><strong>COMPETITIONS</strong></h1>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="navbar-link btn disabled" to="/registration/">
							<h1><strong>REGISTRATION</strong></h1>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="navbar-link" to="/components/">
							<h1><strong>SPONSORS</strong></h1>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="navbar-link" to="/components/">
							<h1><strong>FAQ</strong></h1>
						</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
			</Navbar>
		</div>
		);
	}
}