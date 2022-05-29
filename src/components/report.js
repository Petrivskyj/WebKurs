import React from 'react';

export function SiteReport(props) {
	return (
		<>
			<div className="site-report">
				<div className="alert-close2"> </div>
				<h3>Site Report</h3>
				<div className="skills-top">
					<h5>Sales</h5>
					<h4>{props.object.sales}</h4>
					<div className="clearfix"></div>
					<div className="skills">
						<div className="skill" style={{width:props.object.sales}}></div>
					</div>
				</div>
				<div className="skills-top">
					<h5>Revenue</h5>
					<h4>{props.object.revenue}</h4>
					<div className="clearfix"></div>
					<div className="skills">
						<div className="skill1" style={{width:props.object.revenue}}></div>
					</div>
				</div>
				<div className="skills-top">
					<h5>New Orders</h5>
					<h4>{props.object.orders}</h4>
					<div className="clearfix"></div>
					<div className="skills">
						<div className="skill2" style={{width:props.object.orders}}></div>
					</div>
				</div>
				<p>It is a long established fact that a re-ader will be distracted by the readable content of a page when looking at its layout.</p>
			</div>
		</>
	);
}