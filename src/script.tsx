/* Importing the createRoot function from the react-dom/client module. */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Component
import { App } from './App';
// Classes
import './assets/styles/style.scss';

/* Rendering the App component to the root div in the index.html file. */
createRoot(document.getElementById('root') as HTMLDivElement).render(
	<StrictMode>
		<App />
	</StrictMode>
);
