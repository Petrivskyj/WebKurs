import React from 'react';

var state = {
	"messages":2,
	"notifications":2
};

export class Header extends React.Component {
	render() {
		return (
			<div className="home-strip">

				<View 
				object={state} />

				<Search />

				<Profile />

				<div className="clearfix"></div>
			</div>
		);
	}
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

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(event) {
		this.setState({value: event.target.value});  
	}
	
	handleSubmit(event) {
		alert('Пошук: ' + this.state.value);
		event.preventDefault();
	}
	
	render() {
		return (
			<div className="search">
				<form className="search2" onSubmit={this.handleSubmit}>
					<input type="submit" value=""/> 
					<input type="text" value={this.state.value} onChange={this.handleChange}/>
				</form>
			</div>
		);
	}
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