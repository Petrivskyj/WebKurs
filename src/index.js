import React from 'react';
import {createRoot} from 'react-dom/client';

import { SideBar } from './components/navigation.js';
import { TicTac } from './components/tictac.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './css/tictactoe.css';

class Site extends React.Component {
  render() {
    return (
		<>
			<SideBar />
			<div className="content col-md-10">
				<div className="game">
					<div className="game-board">
						<TicTac />
					</div>
				</div>
			</div>
		</>
    );
  }
}
// ========================================
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<Site />);
