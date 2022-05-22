import React from 'react';

export function SiteReport() {
	return (
		<>
			<div className="site-report">
				<div className="alert-close2"> </div>
				<h3>Site Report</h3>
				<div className="skills-top">
					<h5>Sales</h5>
					<h4>45%</h4>
					<div className="clearfix"></div>
					<div className="skills">
						<div className="skill" style={{width:"45%"}}></div>
					</div>
				</div>
				<div className="skills-top">
					<h5>Revenue</h5>
					<h4>68%</h4>
					<div className="clearfix"></div>
					<div className="skills">
						<div className="skill1" style={{width:"68%"}}></div>
					</div>
				</div>
				<div className="skills-top">
					<h5>New Orders</h5>
					<h4>89%</h4>
					<div className="clearfix"></div>
					<div className="skills">
						<div className="skill2" style={{width:"89%"}}></div>
					</div>
				</div>
				<p>It is a long established fact that a re-ader will be distracted by the readable content of a page when looking at its layout.</p>
			</div>
		</>
	);
}