import React from 'react';

import image1 from '../images/pp1.jpg';
import image2 from '../images/pp2.jpg';
import image3 from '../images/pp3.jpg';

export function Comments(props) {
	return (
		<div className="cd-tabs">
			<Header
			object={props.header}/>
			
			<Body
			object={props.body}/>
			
		</div> 
	);
}

function Header(props) {
	return (
		<nav>
			<ul className="cd-tabs-navigation">
				<Tab
				name={props.object[0].name}
				cclass="fashion0"
				ttext={props.object[0].ttext}/>

				<SelectedTab
				name={props.object[1].name}
				cclass="fashion1"
				ttext={props.object[1].ttext}/>

				<Tab
				name={props.object[2].name}
				cclass="fashion2"
				ttext={props.object[2].ttext}/>

				<div className="clearfix"></div>
			</ul> 
		</nav>
	);
}

function Body(props) {
	return (
		<ul className="cd-tabs-content">
			<TabCont 
			tabName={props.object[0].name}
			mens = {props.object[0].object}/>

			<SelectedTabCont 
			tabName={props.object[1].name}
			mens = {props.object[1].object}/>

			<TabCont 
			tabName={props.object[2].name}
			mens = {props.object[2].object}/>

			<div className="clearfix"></div>
		</ul> 
	);
}

function SelectedTab(props) {
	return (
		<li>
			<a data-content={props.name} href="#0" className={"selected " + props.cclass}>{props.ttext}<i> </i></a>
		</li>
	);
}

function Tab(props) {
	return (
		<li>
			<a data-content={props.name} href="#0" className={props.cclass}>{props.ttext}<i> </i></a>
		</li>
	);
}


function SelectedTabCont(props) {
	return (
		<li data-content={props.tabName} className="selected">
			<div className="top-men">
				{props.mens.map((anObjectMapped, index) => {
					return (
						<Men
						key = {index}
						imag = {anObjectMapped.iimage}
						header = {anObjectMapped.hheader}
						date = {anObjectMapped.ddate}
						tex = {anObjectMapped.ttext}/>
					);
				})}
				
			</div>
		</li>
	);
}

function TabCont(props) {
	return (
		<li data-content={props.tabName}>
			<div className="top-men">
				{props.mens.map((anObjectMapped, index) => {
					return (
						<Men
						key = {index}
						imag = {anObjectMapped.iimage}
						header = {anObjectMapped.hheader}
						date = {anObjectMapped.ddate}
						tex = {anObjectMapped.ttext}/>
					);
				})}
				
			</div>
		</li>
	);
}

function Men(props) {
	let immg;
	if (props.imag === "id1"){
		immg = image1;
	}
	if (props.imag === "id2"){
		immg = image2;
	}
	if (props.imag === "id3"){
		immg = image3;
	}
	return (
		<div className="men">
			<div className="grid-men">
				<img src={immg} className="img-responsive" alt=""></img>
			</div>
			<div className="men-grid">
				<h6>{props.header}</h6>
				<span>{props.date}</span>
				<p className="text">{props.tex}</p>
			</div>
			<div className="clearfix"></div>
		</div>
	);
}