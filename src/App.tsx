/* Importing the `FC` type from the `react` package. */
import { FC } from 'react';
// Components
import { Main } from './components/Layout/Main/Main';
import { Footer } from './components/Layout/Footer/Footer';

export const App: FC = () => (
	<>
		<Main />
		<Footer />
	</>
);
