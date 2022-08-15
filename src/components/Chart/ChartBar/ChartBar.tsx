/* Importing the React Function Component type. */
import { useState, FC, useId } from 'react';
// Component
import { Tooltip } from '../../Tooltip/Tooltip';
// Types
import { ChartBarProps } from './ChartBar.model';
// Classes
import classes from './ChartBar.module.scss';

export const ChartBar: FC<ChartBarProps> = props => {
	const [hovered, setHovered] = useState<boolean>(false);
	const [animationEnd, setAnimationEnd] = useState<boolean>(false);
	const id = useId();

	return (
		<div
			className={`${classes.chartBar} ${props.className} ${
				animationEnd && props.maxAmount === props.amount
					? classes.maxAmount
					: ''
			}`}
			onMouseOver={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			onAnimationEnd={() => setAnimationEnd(true)}
			aria-describedby={id}
		>
			<Tooltip id={id} isShown={hovered} amount={props.amount} />
		</div>
	);
};
