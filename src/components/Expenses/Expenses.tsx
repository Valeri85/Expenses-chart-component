import { FC } from 'react';
// Components
import { MyBalance } from '../MyBalance/MyBalance';
import { Chart } from '../Chart/Chart';
import { Total } from '../Total/Total';
// Classes
import classes from './Expanses.module.scss';

export const Expenses: FC = () => (
	<section className={classes.expenses} aria-labelledby="mainTitle">
		<h1 className={classes.mainTitle} id="mainTitle">
			My Expenses Application
		</h1>
		<MyBalance />
		<Chart />
		<Total />
	</section>
);
