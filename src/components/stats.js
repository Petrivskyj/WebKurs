import React from 'react';

export function Stats(props) {
	
	let statsObjects = [
		{"generalClass":"visitors","title":"Total Visitors","number":props.object.visitors,"newNumber":"10%"},
		{"generalClass":"sales","title":"Total Sale","number":props.object.sales,"newNumber":"100"},
		{"generalClass":"total-users","title":"Total User","number":props.object.users,"newNumber":"120"}
	];
	
	return (
		<div className="list_of_members">
			{statsObjects.map((anObjectMapped, index) => {
				return (
					<OneStat 
					key={index}
					object={anObjectMapped}/>
				);
			})}
			<div className="clearfix"></div>
		</div>
	);
}


function OneStat(props) {
	return (
		<div className={props.object.generalClass}>
			<p>{props.object.title}</p>
			<h3>{props.object.number}</h3>
			<div className="next-choise">
				<div className="next-choise-text">
					<p>{props.object.newNumber} New today</p>
				</div>
				<div className="next-choise-img">
					<i className="go"></i>
				</div>
			</div>
			<div className="clearfix"></div>
		</div>
	);
}