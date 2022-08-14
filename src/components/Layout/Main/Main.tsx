import { FC } from 'react';
// Component
import { Expenses } from '../../Expenses/Expenses';
// Classes
import classes from './Main.module.scss';

export const Main: FC = () => (
	<main className={classes.main}>
		<Expenses />
	</main>
);
