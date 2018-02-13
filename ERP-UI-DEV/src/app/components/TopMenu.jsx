import React from 'react';
import { connect } from 'react-redux';
import * as StateSelectors from '../state/StateSelectors.js'
import * as ActionTypes from '../actions'
import { hashHistory} from 'react-router';
import { Link} from 'react-router';

import TopMenuAnonymous from './TopMenuAnonymous.jsx'


/*
import TopMenuAdmin from './TopMenuAdmin.jsx'
import {ROLE_ADMIN,ROLE_ANONYMOUS} from '../utils/Consts.js'

*/
export class TopMenu extends React.Component{

	constructor(props) {
		super(props);
		/*
		this.state={
			showMenu:false,
			role:ROLE_ANONYMOUS,
			username:ROLE_ANONYMOUS
		}*/
		this.handleSignout=this.handleSignout.bind(this);
	}

	handleSignout(){
		this.props.dispatch({	
			type:ActionTypes.SIGN_OUT_USER
		});
		hashHistory.push('/login');
	}

	componentWillReceiveProps (nextProps){
		this.setState(Object.assign({},this.state,{showMenu:nextProps.showMenu,role:nextProps.role,username:nextProps.username}));
	}

	render () {


		let navBar;
		{/*
		if (this.state.showMenu) {
			switch(this.state.role){
				case ROLE_ADMIN:
					navBar = <TopMenuAdmin username={this.state.username}/>;
					break;
				default:
					navBar = <TopMenuSupervisor username={this.state.username}/>;
			}

		} else {
			navBar = <TopMenuAnonymous username={this.state.username}/>;
		}*/}

		navBar = <TopMenuAnonymous username={'username'}/>;
		return (
			<div id="topMenuBar">				
				<div className="navbar main">
				<a href="/" className="appbrand"><span>ERP <span>Enterprise Resource Planner </span></span></a>
					{navBar}
				</div>
			</div>
			);
	}
}
function mapStateToProps (state,ownProps) {
	return {};
}

export default connect(mapStateToProps)(TopMenu)