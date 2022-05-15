import React from 'react';
import {createRoot} from 'react-dom/client';

import { SideBar } from './components/navigation.js';
import { Header } from './components/header.js';
import { Stats } from './components/stats.js';

import { ContactForm } from './components/contact.js';
import { Calender } from './components/calender.js'

import { Footer } from './components/footer.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

import './js/main.js';

var statistics = {
	"visitors":9999,
	"sales":9999,
	"users":9999
};
var state = {
	"messages":2,
	"notifications":5
};
var nav;
{
	let nav1 = [
		{"name":"Navigation"},
		{"Cclass":"dash","name":"Dashboard"},
		{"Cclass":"mail","name":"Emails"},
		{"Cclass":"cal","name":"Calendar"},
		{"Cclass":"page","name":"Pages"}
	];
	let nav2 = [
		{"name":"Featured"},
		{"Cclass":"chat","name":"Charts"},
		{"Cclass":"art","name":"Articals"},
		{"Cclass":"user","name":"Users"},
		{"Cclass":"fat","name":"Favorites"},
		{"Cclass":"speed","name":"Speed"},
		{"Cclass":"setting","name":"Settings"}
	];
	let nav3 = [
		{"name":"All Others"},
		{"Cclass":"rev","name":"Revenue"},
		{"Cclass":"pic","name":"Pictures"},
		{"Cclass":"faq","name":"FAQs"}
	];
	nav = [nav1,nav2,nav3];
}

function Site() {
    return (
		<>
		<div className="total-content">
		
			<SideBar 
			object={nav}/>
			
			<div className="content col-md-10">
			
				<Header 
				object={state}/>
				
				<Stats 
				object={statistics}/>
				
				<div className="calenders">
					<ContactForm />
					<Calender />
					<div className="clearfix"></div>
				</div>
			</div>
		</div>
		<Footer	/>
		</>
    );
}
// ========================================
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<Site />);
