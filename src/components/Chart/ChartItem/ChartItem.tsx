/* Importing the `FC` type from the `react` package. */
import { FC } from 'react';
// Component
import { StyledChartBar } from '../ChartBar/ChartBar.styled';
// Types
import { ChartItemProps } from './ChartItem.model';
// Classes
import classes from './ChartItem.module.scss';

export const ChartItem: FC<ChartItemProps> = props => {
	const year = new Date().getFullYear().toString();

	return (
		<li className={classes.chartItem}>
			<StyledChartBar amount={props.amount} maxAmount={props.maxAmount} />
			<time className={classes.day} dateTime={year}>
				{props.day}
			</time>
		</li>
	);
};
