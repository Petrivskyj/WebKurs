import React from 'react';
import DatePicker from 'sassy-datepicker';

export function Calender() {
	return (
		<>
			<div class="calender-right">
				<div class="alert-close1"> </div>
				<h3>Calendar</h3>
				<DatePicker />
			</div>
		</>
	);
}