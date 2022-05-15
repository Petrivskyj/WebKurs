import React from 'react';
import {createRoot} from 'react-dom/client';

import { SideBar } from './components/navigation.js';
import { Header } from './components/header.js';
import { TicTac } from './components/tictac.js';
import { Footer } from './components/footer.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './css/tictactoe.css';

class Site extends React.Component {
  render() {
    return (
		<>
		<div className="total-content">
			<SideBar />
			<div className="content col-md-10">
				<Header />
				<div className="game">
					<div className="game-board">
						<TicTac />
					</div>
				</div>
			</div>
		</div>
		<Footer	/>
		</>
    );
  }
}
// ========================================
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<Site />);
