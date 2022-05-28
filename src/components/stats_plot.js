import React from 'react';
import Chart from "react-apexcharts";

const Sseries = [  
				{
                name: "Sales",
                data: [2000, 3000, 2000, 4000, 2000, 3000]},
				{
                name: "Visitors",
                data: [25000, 40000, 25000, 10000, 15000, 35000]},
		     ];
			 
const categarray = ['12-6-21', '12-7-21', '12-8-21', '12-9-21', '12-10-21', '12-11-21'];
			 
var Ooptions = {chart: {
            background: '#34495e', 
            toolbar: {show: false},zoom: {enabled: false},},
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
            curve: 'straight'
          },
          grid: {   
                show: true,   
               borderColor:'#e5f3f7',  
               strokeDashArray:0,
                position:'back', 
                xaxis: {
                    lines: {
                       show:true
                    }        
                },   
                padding: {
                    top: 0,
                    right: 10,
                    bottom: 0,
                    left: -40
                },  
            },
          dataLabels: {
            enabled: false
          },
        colors: ["#1efe00","#dab045"],    
        markers: {
          size: 3,
            colors:'#ff00ff'
        },
        stroke: {
            width: [4, 4]
          },
        xaxis: {
        categories: categarray,
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
            x: {
        
              show: false
            }
          },
          legend: {
            horizontalAlign: "left",
          labels: {
                  colors:"#dab045" ,
              },
            offsetX: 40,
            markers: {
                  width: 12,
                  height: 12,
                  radius: 0,
              },
          }
    };

export function Stats_Plot(props) {
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
					<button id="daily" type="button" onClick={handleDailyClick} className="btn btn-warning m-0">Daily</button>
					<button id="monthly" type="button" onClick={handleMontlyClick} className="btn btn-warning m-0">Monthly</button>
					<button id="yearly" type="button" onClick={handleYearlyClick} className="btn btn-warning m-0">Yearly</button>
				</div>
		</div>
	);
}

function handleDailyClick(){
	category('daily');
    Sales('daily');
	Visitors('daily');
}

function handleMontlyClick(){
	category('monthly');
    Sales('monthly');
	Visitors('monthly');
}

function handleYearlyClick(){
	category('yearly');
    Sales('yearly');
	Visitors('yearly');
}

function Sales(period)
{
	switch (period) {
		case "daily":
            Sseries[0].data = [50, 80, 20, 10, 80, 40];
            break;
        case "monthly":
            Sseries[0].data = [2000, 3000, 2000, 4000, 2000, 3000];
            break;
        case "yearly":
			Sseries[0].data = [1100, 2000, 1000, 1200, 10200, 2200];
            break;
        default:
            break;
    }
}

function Visitors(period)
{
    switch (period) {
		case "daily":
            Sseries[1].data = [900, 1100, 2000, 1000, 500, 300];
            break;
        case "monthly":
            Sseries[1].data = [25000, 40000, 25000, 10000, 15000, 35000];
            break;
        case "yearly":
            Sseries[1].data = [110000, 200000, 150000, 12000, 180000, 228000];
            break;
        default:
            break;
    }
}


function category(period){
    switch (period) {
		case "daily":
			categarray[0] = 'Mon';
			categarray[1] = 'Tue';
			categarray[2] = 'Wed';
			categarray[3] = 'Thur';
			categarray[4] = 'Fri';
			categarray[5] = 'Sat';
            break;
        case "monthly":
            categarray[0] = 'Jan 22';
			categarray[1] = 'Feb 22';
			categarray[2] = 'Mar 22';
			categarray[3] = 'Apl 22';
			categarray[4] = 'May 22';
			categarray[5] = 'Jun 22';
            break;
        case "yearly":
			categarray[0] = '2016';
			categarray[1] = '2017';
			categarray[2] = '2018';
			categarray[3] = '2019';
			categarray[4] = '2020';
			categarray[5] = '2021';
            break;
        default:
            break;
    }
}