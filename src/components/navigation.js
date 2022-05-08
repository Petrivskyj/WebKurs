import React from 'react';
import logo from '../images/logo.png' 

export class SideBar extends React.Component {
	render() {
		return (
			<>
			<div className="side-bar col-md-2">
				<Logo />
				
				<div className="navigation">
					<h3>Navigation</h3>
					
					<NavigationCategoryOption
					myClassName = "dash"
					myName = "Dashboard"/>
					
					<NavigationCategoryOption
					myClassName = "mail"
					myName = "Emails"/>
					
					<NavigationCategoryOption
					myClassName = "cal"
					myName = "Calendar"/>
					
					<NavigationCategoryOption
					myClassName = "page"
					myName = "Pages"/>
				</div>
				
				<div className="navigation">
					<h3>Featured</h3>
					
					<NavigationCategoryOption
					myClassName = "chat"
					myName = "Charts"/>
					
					<NavigationCategoryOption
					myClassName = "art"
					myName = "Articals"/>
					
					<NavigationCategoryOption
					myClassName = "user"
					myName = "Users"/>
					
					<NavigationCategoryOption
					myClassName = "fat"
					myName = "Favorites"/>
					
					<NavigationCategoryOption
					myClassName = "speed"
					myName = "Speed"/>
					
					<NavigationCategoryOption
					myClassName = "setting"
					myName = "Settings"/>
				</div>
			
				<div className="navigation">
					<h3>All Others</h3>
					
					<NavigationCategoryOption
					myClassName = "rev"
					myName = "Revenue"/>
					
					<NavigationCategoryOption
					myClassName = "pic"
					myName = "Pictures"/>
					
					<NavigationCategoryOption
					myClassName = "faq"
					myName = "FAQs"/>
				</div>
			</div>
			</>
		);
	}
}

class Logo extends React.Component {
	render() {
		return (
			<div className="logo text-center">
				<a href="index.html"><img src={logo} alt="" /></a>
			</div>
		);
	}
}

/*
function NavigationCategory(props) {
	return (
		<div className="navigation">
			<h3>catName</h3>
		</div>
	);
}
*/

function NavigationCategoryOption(props) {
	return (
		<ul>
			<li><a href="index.html"><i className={props.myClassName}></i></a></li>
			<li><a href="index.html">{props.myName}</a></li>
		</ul>
	);
}