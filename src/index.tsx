import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './app';
import { HashRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
	<StrictMode>
		<Router>
			<App />
		</Router>
	</StrictMode>
);
