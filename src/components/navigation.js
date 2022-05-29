import React from 'react';
import logo from '../images/logo.png' 

export function SideBar(props) {
	return (
		<>
		<div className="side-bar col-md-2">
			<Logo />
			<Navigation 
			array={props.object}/>
				
		</div>
		</>
	);
}

function Logo() {
	return (
		<div className="logo text-center">
			
			<a href="/temp">
				<img src={logo} alt="" />
			</a>
		</div>
	);
}


function Navigation(props) {
	return (
		<>
			{props.array.map((anObjectMapped, index) => {
				return (
					<NavigationCategory 
					key={index}
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
					key={index}
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
			<li><a href="/temp"><i className={props.myClassName}></i></a></li>
			<li><a href="/temp">{props.myName}</a></li>
		</ul>
	);
}

