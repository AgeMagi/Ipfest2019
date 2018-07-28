import React from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem } from 'reactstrap';

import './Navigation.css';

export default class Navigation extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
		isOpen: false
		};
	}
	toggle() {
		this.setState({
		isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
		<div>
			<Navbar color="light" className="navbar" light expand="md">
			<NavbarBrand href="/">
				<img className="logo" src={require('../../images/Logo.png')}/>
			</NavbarBrand>
			<NavbarToggler onClick={this.toggle} />
			<Collapse className="navbar-collapse" isOpen={this.state.isOpen} navbar>
				<Nav className="ml-auto" navbar>
					<NavItem>
						<NavLink className="navbar-link" href="/components/">
							<h1>ABOUT</h1>
							<img src={require("../../images/Layer 1.png")} />
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="navbar-link" href="/components/">
							<h1>EVENT</h1>
							<img src={require("../../images/Layer 1.png")} />
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="navbar-link" href="/components/">
							<h1>REGISTRATION</h1>
							<img src={require("../../images/Layer 1.png")} />
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="navbar-link" href="/components/">
							<h1>SPONSOR & MEDIA</h1>
							<img src={require("../../images/Layer 1.png")} />
						</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
			</Navbar>
		</div>
		);
	}
}