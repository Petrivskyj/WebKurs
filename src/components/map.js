import React from 'react';

import '../js/jquery.vmap.js';
import '../js/jquery.vmap.world.js';

export function WorldMap() {
	return (
		<>
			<div class="world-map">
				<div class="alert-close3"> </div> 
				<h3>Sales around world</h3>
				<p><span class="color1"></span>40%<span class="color2"></span>12%<span class="color3"></span>11%<span class="color4"></span>10%<span class="color5"></span>18%</p>
				<div class="clearfix"></div>
				<div id="vmap" style={{width: "545px", height:"400px"}}></div>
			</div>
		</>
	);
}