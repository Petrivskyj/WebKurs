import React from 'react';
import logo from '../images/logo.png' 

var nav;
{
	let nav1 = [
		{"name":"Navigation"},
		{"Cclass":"dash","name":"Dashboard"},
		{"Cclass":"mail","name":"Emails"},
		{"Cclass":"cal","name":"Calendar"},
		{"Cclass":"page","name":"Pages"}
	];
	let nav2 = [
		{"name":"Featured"},
		{"Cclass":"chat","name":"Charts"},
		{"Cclass":"art","name":"Articals"},
		{"Cclass":"user","name":"Users"},
		{"Cclass":"fat","name":"Favorites"},
		{"Cclass":"speed","name":"Speed"},
		{"Cclass":"setting","name":"Settings"}
	];
	let nav3 = [
		{"name":"All Others"},
		{"Cclass":"rev","name":"Revenue"},
		{"Cclass":"pic","name":"Pictures"},
		{"Cclass":"faq","name":"FAQs"}
	];
	
	nav = [nav1,nav2,nav3];
	console.log(nav); //todo get from backend
}


export class SideBar extends React.Component {
	render() {
		return (
			<>
			<div className="side-bar col-md-2">
				<Logo />
				
				<Navigation 
				array={nav}/>
				
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


function Navigation(props) {
	return (
		<>
			{props.array.map((anObjectMapped, index) => {
				return (
					<NavigationCategory 
					object={anObjectMapped}/>
				);
			})}
			
		</>
	);
}


function NavigationCategory(props) {
	let array = props.object;
	let name = props.object[0].name;
	array.shift();

	return (
		<div className="navigation">
			<h3>{name}</h3>
					
			{array.map((anObjectMapped, index) => {
				return (
					<NavigationCategoryOption
					myClassName = {anObjectMapped.Cclass}
					myName = {anObjectMapped.name}/>
				);
			})}
		</div>
	);
}

function NavigationCategoryOption(props) {
	return (
		<ul>
			<li><a href="index.html"><i className={props.myClassName}></i></a></li>
			<li><a href="index.html">{props.myName}</a></li>
		</ul>
	);
}

