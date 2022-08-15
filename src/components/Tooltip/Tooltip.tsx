/* Importing the `FC` type from the `react` package. */
import { FC } from 'react';
// Types
import { TooltipProps } from './Tooltip.model';
// Classes
import classes from './Tooltip.module.scss';

export const Tooltip: FC<TooltipProps> = props => (
	<data
		className={`${classes.tooltip} ${
			props.isShown ? classes.show : classes.hide
		}`}
		id={props.id}
		value={props.amount}
		aria-hidden={props.isShown ? false : true}
	>
		<abbr title="USD">$</abbr>
		{props.amount}
	</data>
);
