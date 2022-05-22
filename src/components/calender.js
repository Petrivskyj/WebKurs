import React from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export function Calender() {
	return (
		<>
			<div className="calender-right">
				<div className="alert-close1"> </div>
				<h3>Calendar</h3>
				<Calendar 
				showNeighboringMonth={false}/>
			</div>
		</>
	);
}