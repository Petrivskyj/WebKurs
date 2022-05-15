import React from 'react';

export function Header(props) {
	return (
		<>
			<div className="home-strip">
				<View 
				object={props.object} />

				<Search />

				<Profile />

				<div className="clearfix"></div>
			</div>
			<Path />
		</>
	);
}


function View(props) {
	return (
		<>
			<div className="view">
				<ul>
					<LiWithIAndHref
					object={{"href":"index.html","iClass":"refresh"}}/>
					
					<LiWithSpanAndHref
					object={{
						"cclassName":"messages",
						"href":"#1",
						"iimage":"msgs",
						"spanClass":"red",
						"messages": props.object.messages
					}}/>
					
					<LiWithSpanAndHref
					object={{
						"cclassName":"notifications",
						"href":"#2",
						"iimage":"bell",
						"spanClass":"blue",
						"messages": props.object.notifications
					}}/>
				</ul>
			</div>
		</>
	);
}


var value;

const handleChange = (event) => {
	value=event.target.value;
}
	
const handleSubmit = (event) => {
	alert('Пошук: ' + value);
	value='';
	event.preventDefault();
}
	
function Search(props) {
	return (
		<div className="search">
			<form className="search2" onSubmit={handleSubmit}>
				<input type="submit" value=""/> 
				<input type="text" value={value} onChange={handleChange}/>
			</form>
		</div>
	);
}

function Profile() {
	return (
		<>
			<div className="member">
				<ul>
					<LiWithIAndHref
					object={{"href":"#3","iClass":"men"}}/>

					<LiWithTextAndHref
					object={{"href":"#4","ttext":"Username"}}/>

					<LiWithIAndHref
					object={{"href":"#5","iClass":"settings"}}/>

				</ul>
				<div className="clearfix"></div>
			</div>
		</>
	);
}

function Path() {
	//todo generate
	return (
		<p className="home">
			<a href="#0">Home</a> 
			>
			<strong> Dashboard</strong> 
		</p>
	);
}

function LiWithIAndHref(props) {
	return (
		<>
			<li>
				<a href={props.object.href}>
				<i className={props.object.iClass}>
				</i>
				</a>
			</li>
		</>
	);
}

function LiWithTextAndHref(props) {
	return (
		<>
			<li>
				<a href={props.object.href}>
				<p>{props.object.ttext}</p>
				</a>
			</li>
		</>
	);
}

function LiWithSpanAndHref(props) {
	return (
		<>
			<li className={props.object.cclassName}>
				<a href={props.object.href}>
				<i className={props.object.iimage}>
				</i>
				<span className={props.object.spanClass}>{props.object.messages}</span>
				</a>
			</li>
		</>
	);
}