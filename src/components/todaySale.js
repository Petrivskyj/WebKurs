import React from 'react';
import Chart from "react-apexcharts";


var Sseries = [
				{
					name: "Sales",
					data: []
				},
];

var Ooptions = {
	chart: {
        background: '#e84c3f',
        toolbar: {show: false,},
		zoom: {enabled: false},
	},
	stroke: {
		curve: 'straight',
    },
    markers: {
		size: 3,
        colors:'#ff00ff'
    },
    grid: {
		show: false,
		padding: {
			top: 0,
			right: 2,
			bottom: -25,
			left: -10
		},
    },
    dataLabels: {
		enabled: false
    },
	title: {
        text: 'Today Sale',
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
    colors: ['#f1c30e'],
	fill: {
        opacity: 1,
        type: 'solid',
	},
	plotOptions: {
        area: {fillTo: 'origin',}
    },
	xaxis: {
        labels: {show: false,},
        axisTicks: {show: false,},
        axisBorder: {show: false,},
        categories: []
	},
	yaxis: {
        labels: {show: false,},
        axisTicks: {show: false,},
        axisBorder: {show: false,},
    }
};

export function TodaySale(props) {
	Sseries[0].data=props.object.daysSales;
	Ooptions.xaxis.categories = props.object.days;
	return (
		<div id="chart3">
			<div className="alert-close5"></div>
				<Chart 
				options = {Ooptions}
				series = {Sseries}
				height = "350"   
				type = "area"/>
		</div>
	);
}
