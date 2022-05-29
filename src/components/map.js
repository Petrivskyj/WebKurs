import React from 'react';

import '../js/jquery.vmap.js';
import '../js/jquery.vmap.world.js';

export function WorldMap(props) {
	return (
		<>
			<div className="world-map">
				<div className="alert-close3"> </div> 
				<h3>Sales around world</h3>
				<p>
					<span className="color1"></span>
					{props.object.color1}
					<span className="color2"></span>
					{props.object.color2}
					<span className="color3"></span>
					{props.object.color3}
					<span className="color4"></span>
					{props.object.color4}
					<span className="color5"></span>
					{props.object.color5}
				</p>
				<div className="clearfix"></div>
				<div id="vmap" style={{width: "545px", height:"400px"}}></div>
			</div>
		</>
	);
}