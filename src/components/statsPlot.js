import React, { useState } from 'react';
import Chart from "react-apexcharts";

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
	console.log(value);
    return () => setValue(value => value + 1); // update the state to force render
}

export function StatsPlot(props) {
	
let Sseries = [  
			{
               name: "Sales",
                data: props.sales},
			{
                name: "Visitors",
                data: props.visitors},
];
	
let Ooptions = {
	chart: {
		background: '#34495e',
		toolbar: {show: false},
		zoom: {enabled: false},
		},
	title: {
		text: 'Site Statics',
		align: 'left',
		margin: 10,
		offsetX: 0,
		offsetY: 0,
		floating: false,
		style: {
			fontSize:  '14px',
			fontWeight:  'bold',
			color:  '#ffffff'
			},
	},
	stroke: {
		curve: 'straight',
		width: [4, 4]
	},
	grid: {   
		show: true,   
		borderColor:'#e5f3f7',  
		strokeDashArray:0,
		position:'back', 
		xaxis: {
			lines: {show:true}
			},
		padding: {
			top: 0,
			right: 10,
			bottom: 0,
			left: -40
		},
	},
	dataLabels: {enabled: false},
	colors: ["#1efe00","#dab045"],    
	markers: {
		size: 3,
		colors:'#ff00ff'
	},
	xaxis: {
        categories: props.cat,
        labels: {
			style: {
				colors:  '#ffffff'
			}
        }
	},
	yaxis: [ 
		{
			categories: [0,2000,4000,6000,8000,10000],       
			axisBorder: {show:false,},
			labels: {       
				offsetY:10,  
				offsetX:-60,     
				style: {colors: "#1efe00"}
			},    
		},
		{
			categories: [0,10000,20000,30000,40000,50000],
			labels: {
				offsetX:0,
				offsetY:0,
				style: {colors: "#dab045"}
				},
		}
	],
	tooltip: {
		shared: false,
		intersect: true,
		x: {show: false}
	},
	legend: {
		horizontalAlign: "left",
		labels: {colors:"#dab045",},
		offsetX: 40,
		markers: {
			width: 12,
			height: 12,
			radius: 0,
		},
	}
};
	
	
	function Sales(period)
	{
		switch (period) {
			case "daily":
				props.sales[0] = props.object.daysSales[0];
				props.sales[1] = props.object.daysSales[1];
				props.sales[2] = props.object.daysSales[2];
				props.sales[3] = props.object.daysSales[3];
				props.sales[4] = props.object.daysSales[4];
				props.sales[5] = props.object.daysSales[5];
				break;
			case "monthly":
				props.sales[0] = props.object.monthsSales[0];
				props.sales[1] = props.object.monthsSales[1];
				props.sales[2] = props.object.monthsSales[2];
				props.sales[3] = props.object.monthsSales[3];
				props.sales[4] = props.object.monthsSales[4];
				props.sales[5] = props.object.monthsSales[5];
				break;
			case "yearly":
				props.sales[0] = props.object.yearsSales[0];
				props.sales[1] = props.object.yearsSales[1];
				props.sales[2] = props.object.yearsSales[2];
				props.sales[3] = props.object.yearsSales[3];
				props.sales[4] = props.object.yearsSales[4];
				props.sales[5] = props.object.yearsSales[5];
				break;
			default:
				break;
		}
	}

	function Visitors(period)
	{
		switch (period) {
			case "daily":
				props.visitors[0] = props.object.daysVisitors[0];
				props.visitors[1] = props.object.daysVisitors[1];
				props.visitors[2] = props.object.daysVisitors[2];
				props.visitors[3] = props.object.daysVisitors[3];
				props.visitors[4] = props.object.daysVisitors[4];
				props.visitors[5] = props.object.daysVisitors[5];
				break;
			case "monthly":
				props.visitors[0] = props.object.monthsVisitors[0];
				props.visitors[1] = props.object.monthsVisitors[1];
				props.visitors[2] = props.object.monthsVisitors[2];
				props.visitors[3] = props.object.monthsVisitors[3];
				props.visitors[4] = props.object.monthsVisitors[4];
				props.visitors[5] = props.object.monthsVisitors[5];
				break;
			case "yearly":
				props.visitors[0] = props.object.yearsVisitors[0];
				props.visitors[1] = props.object.yearsVisitors[1];
				props.visitors[2] = props.object.yearsVisitors[2];
				props.visitors[3] = props.object.yearsVisitors[3];
				props.visitors[4] = props.object.yearsVisitors[4];
				props.visitors[5] = props.object.yearsVisitors[5];
				break;
			default:
				break;
		}
	}


	function category(period){
		switch (period) {
			case "daily":
				props.cat[0] = props.object.days[0];
				props.cat[1] = props.object.days[1];
				props.cat[2] = props.object.days[2];
				props.cat[3] = props.object.days[3];
				props.cat[4] = props.object.days[4];
				props.cat[5] = props.object.days[5];
				break;
			case "monthly":
				props.cat[0] = props.object.months[0];
				props.cat[1] = props.object.months[1];
				props.cat[2] = props.object.months[2];
				props.cat[3] = props.object.months[3];
				props.cat[4] = props.object.months[4];
				props.cat[5] = props.object.months[5];
				break;
			case "yearly":
				props.cat[0] = props.object.years[0];
				props.cat[1] = props.object.years[1];
				props.cat[2] = props.object.years[2];
				props.cat[3] = props.object.years[3];
				props.cat[4] = props.object.years[4];
				props.cat[5] = props.object.years[5];
				break;
			default:
				break;
		}
	}

	function useHandleDailyClick(){
		category('daily');
		Sales('daily');
		Visitors('daily');
		forceUpdate();
	}

	function useHandleMontlyClick(){
		category('monthly');
		Sales('monthly');
		Visitors('monthly');
		forceUpdate();
	}

	function useHandleYearlyClick(){
		category('yearly');
		Sales('yearly');
		Visitors('yearly');
		forceUpdate();
	}

	const forceUpdate = useForceUpdate();
	
	return (
		<div className="stats">
				<div id="chart1">
					<Chart 
					options = {Ooptions}
					series = {Sseries}
					height = "350"   
					type = "line"/>
				</div>
				
				<div className="alert-close6">
				</div> 
				<div className="btn-group btn-group-sm mr-3 statsbutton" role="group" aria-label="Basic example">
					<button id="daily" type="button" onClick={useHandleDailyClick} className="btn btn-warning m-0">Daily</button>
					<button id="monthly" type="button" onClick={useHandleMontlyClick} className="btn btn-warning m-0">Monthly</button>
					<button id="yearly" type="button" onClick={useHandleYearlyClick} className="btn btn-warning m-0">Yearly</button>
				</div>
		</div>
	);
}