import React from 'react';

var username = 'Username';
var subject = 'Subject';
var message = 'Message';

const handleChangeUsername = (event) => {
	username=event.target.value;
}

const handleChangeSubject = (event) => {
	subject=event.target.value;
}

const handleChangeMessage = (event) => {
	message=event.target.value;
}
	
const handleSubmit = (event) => {
	alert('Username: ' + username + '\n'+
	'Subject: ' + subject + '\n'+
	'Message: ' + message);
	username='';
	subject='';
	message='';
	event.preventDefault();
}

export function ContactForm() {
	return (
		<>
			<div className="calender-left">
				<div className="alert-close"> </div> 
				<h3>Contact form</h3>
				<form onSubmit={handleSubmit}>
					<input type="text" className="text" placeholder="Username" onChange={handleChangeUsername} />
					<input type="text" className="text" placeholder="Subject" onChange={handleChangeSubject} />
					<textarea placeholder="Message" onChange={handleChangeMessage}></textarea>
					<input type="submit" value="SEND"/>
				</form>
			</div>
		</>
	);
}