/* Importing the `FC` type from the `react` package. */
import { FC } from 'react';
// Component
import { ChartList } from './ChartList/ChartList';
// Classes
import classes from './Chart.module.scss';

export const Chart: FC = () => (
	<div className={classes.chart}>
		<h3 className={classes.chartTitle}>Spending - Last 7 days</h3>
		<ChartList />
	</div>
);
