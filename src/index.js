import React from 'react';
import {createRoot} from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { UnderConstruction } from './underConstruction.js'
import { NotFound } from './notFound.js'

import { SideBar } from './components/navigation.js';

import { Header } from './components/header.js';
import { Stats } from './components/stats.js';

import { StatsPlot } from './components/statsPlot.js'

import { WorldMap } from './components/map.js';
import { SiteReport } from './components/report.js';

import { UserTrend } from './components/userTrend.js';
import { TodaySale } from './components/todaySale.js';

import { ContactForm } from './components/contact.js';
import { Calender } from './components/calender.js';

import { Comments } from './components/comments.js';

import { Footer } from './components/footer.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

import './js/main.js';

import navigationData from './data/navigation.json';
import siteStateData from './data/site_state.json';
import headerStatsData from './data/header_stats.json';
import plotData from './data/plots.json';
import mapData from './data/map_stats.json';
import commentsData from './data/comments.json';

var commentsHeader = commentsData.commentsHeader;
var commentsBody = commentsData.commentsBody;

function Site() {
    return (
		<>
		<div className="total-content">
		
			<SideBar 
			object={navigationData}/>
			
			<div className="content col-md-10">
			
				<Header 
				object={siteStateData}/>
				
				<Stats 
				object={headerStatsData}/>
				
				<StatsPlot
				object={plotData}
				cat={["Mon","Tue","Wed","Thur","Fri","Sat"]}
				visitors={[900, 1100, 2000, 1000, 500, 300]}
				sales={[50, 80, 20, 10, 80, 40]}/>
				
				<div className="total-world">
					<WorldMap 
					object={mapData}/>
					<SiteReport 
					object={siteStateData}/>
					<div className="clearfix"></div>
				</div>
				
				<div>
					<TodaySale
					object={plotData}/>
					<UserTrend
					object={plotData}/>
				</div>
				
				<div className="calenders">
					<ContactForm />
					<Calender />
					<div className="clearfix"></div>
				</div>

				<Comments
				header={commentsHeader}
				body={commentsBody}/>
			</div>
		</div>

		<Footer	/>
		</>
    );
}
// ========================================
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Site />}></Route>
			<Route path="/temp" element={<UnderConstruction />}></Route>
			<Route path="*" element={<NotFound/>}/>
		</Routes>
	</BrowserRouter>
);