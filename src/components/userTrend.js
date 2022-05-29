import React from 'react';
import Chart from "react-apexcharts";

var Sseries = [
				{
					name: 'New',
					data: []
				},
				{
					name: 'Sales',
					data: []
				},
];

var Ooptions = {
	chart: {
        background: '#1b93e1',
        toolbar: {show: false,},
        zoom: {enabled: false},
	},
    title: {
		text: 'Users Trend',
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
    colors: ["#384a5e","#21f407"],
    plotOptions: {
		bar: {
			horizontal: false,
			columnWidth: '55%',
		},
	},
    dataLabels: {
		enabled: false
    },
    stroke: {
		show: true,
		width: 2,
		colors: ['transparent']
    },
    xaxis: {
		categories: [],
    },
    yaxis: {
		show: true,
		tickAmount: 5,
		min: 0,
		max: 100,
    },
    fill: {
		opacity: 1
    },
    tooltip: {
		y: {
			formatter: function (val) {
				return "$ " + val + " thousands"
			}
		}
    },
    legend: {
		horizontalAlign: "left",
		offsetX: 40,
		markers: {
			width: 12,
            height: 12,
            radius: 0,
        },
    }
};


export function UserTrend(props) {
	Sseries[0].data=props.object.newMonthsNewSales;
	Sseries[1].data=props.object.newMonthsSales;
	Ooptions.xaxis.categories = props.object.newMonths;
	return (
		<div id="chart2">
			<div className="alert-close4"></div>
				<Chart 
				options = {Ooptions}
				series = {Sseries}
				height = "350"   
				type = "bar"/>
		</div>
	);
}
