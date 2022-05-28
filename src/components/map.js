import React from 'react';

import '../js/jquery.vmap.js';
import '../js/jquery.vmap.world.js';

export function WorldMap() {
	return (
		<>
			<div className="world-map">
				<div className="alert-close3"> </div> 
				<h3>Sales around world</h3>
				<p><span className="color1"></span>40%<span className="color2"></span>12%<span className="color3"></span>11%<span className="color4"></span>10%<span className="color5"></span>18%</p>
				<div className="clearfix"></div>
				<div id="vmap" style={{width: "545px", height:"400px"}}></div>
			</div>
		</>
	);
}