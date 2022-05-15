import React from 'react';

var state = {
	"messages":1,
	"notifications":5
};

export class Header extends React.Component {
	render() {
		return (
			<>
				<div className="home-strip">
				
					<View 
					object={state} />
					
					<Search />
					
					<Profile />
					
					<div className="clearfix"></div>
				</div>
			</>
		);
	}
}

function View(props) {
	return (
		<>
			<div className="view">
				<ul>
					<li>
						<a href="index.html">
						<i className="refresh">
						</i>
						</a>
					</li>
					<li className="messages">
						<a href="#1">
						<i className="msgs">
						</i>
						<span className="red">{props.object.messages}</span>
						</a>
					</li>
					<li className="notifications">
						<a href="#2">
						<i className="bell">
						</i>
						<span className="blue">{props.object.notifications}</span>
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}

function Search() {
	return (
		<>
			<div className="search">
				<div className="search2">
					<form>
						<input type="submit" value=""/> 
						<input type="text"/>
					</form>
				</div>
			</div>
		</>
	);
}

function Profile() {
	return (
		<>
			<div className="member">
				<ul>
					<li>
						<a href="#3">
						<i className="men">
						</i>
						</a>
					</li>
					<li>
						<a href="#4">
						<p>Username</p>
						</a>
					</li>
					<li>
						<a href="#5">
						<i className="settings">
						</i>
						</a>
					</li>
				</ul>
				<div className="clearfix"></div>
			</div>
		</>
	);
}