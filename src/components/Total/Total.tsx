import { FC } from 'react';
// Classes
import classes from './Total.module.scss';

export const Total: FC = () => (
	<footer className={classes.total}>
		<div className={classes.thisMonth}>
			<p className={classes.month}>Total this month</p>
			<data className={classes.totalAmount} value="478.33">
				<abbr title="USD">$</abbr>478.33
			</data>
		</div>
		<div className={classes.lastMonth}>
			<data className={classes.percentage} value="+2.4">
				+2.4%
			</data>
			<p className={classes.month}>from last month</p>
		</div>
	</footer>
);
