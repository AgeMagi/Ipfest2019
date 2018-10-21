import React from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	UncontrolledDropdown,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem } from 'reactstrap';

import { NavLink, Link } from 'react-router-dom';

import './Navigation.css';

export default class Navigation extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.openDropdownEvent = this.openDropdownEvent.bind(this);
		this.closeDropdownEvent = this.closeDropdownEvent.bind(this);
		this.openDropdownCompetition = this.openDropdownCompetition.bind(this);
		this.closeDropdownCompetition = this.closeDropdownCompetition.bind(this);
		this.state = {
			isOpen: false,
			dropdownOpenEvent: false,
			dropdownOpenCompetition: false,
		};
	}

	toggle() {
		this.setState(prevState => ({
			isOpen: !this.state.isOpen,
			dropdownOpen: !prevState.dropdownOpen,
			dropdownOpenCompetition: !prevState.dropdownOpenCompetition,
		}));
	}

	openDropdownEvent() {
		this.setState({dropdownOpenEvent: true})
	}

	closeDropdownEvent() {
		this.setState({dropdownOpenEvent: false})
	}

	openDropdownCompetition() {
		this.setState({dropdownOpenCompetition: true})
	}

	closeDropdownCompetition() {
		this.setState({dropdownOpenCompetition: false})
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
					<UncontrolledDropdown onMouseOver={this.openDropdownEvent} onMouseLeave={this.closeDropdownEvent} isOpen={this.state.dropdownOpenEvent} nav inNavbar>
						<DropdownToggle nav>
							<NavLink className="navbar-link" to="/competition/">
								<h1><strong>COMPETITIONS</strong></h1>
							</NavLink>
						</DropdownToggle>
						<DropdownMenu right>
							<DropdownItem>
								<NavLink className="navbar-link navbar-dropdown" to="/competition/smart-competition">
									<h1><strong>SMART COMPETITION</strong></h1>
								</NavLink>
							</DropdownItem>
							<DropdownItem>
								<NavLink className="navbar-link navbar-dropdown" to="/competition/petrodebate-competition">
									<h1><strong>PETRODEBATE COMPETITION</strong></h1>
								</NavLink>
							</DropdownItem>
							<DropdownItem>
								<NavLink className="navbar-link navbar-dropdown" to="/competition/mud-innovation-competition">
									<h1><strong>MUD INNOVATIVE COMPETITION</strong></h1>
								</NavLink>
							</DropdownItem>
							<DropdownItem>
								<NavLink className="navbar-link navbar-dropdown" to="/competition/paper-poster-competition">
									<h1><strong>PAPER AND POSTER COMPETITION</strong></h1>
								</NavLink>
							</DropdownItem>
							<DropdownItem>
								<NavLink className="navbar-link navbar-dropdown" to="/competition/oil-rig-design-competition">
									<h1><strong>OIL RIG DESIGN COMPETITION</strong></h1>
								</NavLink>
							</DropdownItem>
							<DropdownItem>
								<NavLink className="navbar-link navbar-dropdown" to="/competition/business-case-competition">
									<h1><strong>BUSINESS CASE COMPETITION</strong></h1>
								</NavLink>
							</DropdownItem>
							<DropdownItem>
								<NavLink className="navbar-link navbar-dropdown" to="/competition/plan-of-development-competition">
									<h1><strong>PLAN OF DEVELOPMENT COMPETITION</strong></h1>
								</NavLink>
							</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
					<Dropdown onMouseOver={this.openDropdownCompetition} onMouseLeave={this.closeDropdownCompetition} isOpen={this.state.dropdownOpenCompetition} nav inNavbar>
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
					</Dropdown>
					<NavItem>
						<NavLink className="navbar-link btn disabled" to="/registration/">
							<h1><strong>REGISTRATION</strong></h1>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="navbar-link" to="/sponsor/">
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