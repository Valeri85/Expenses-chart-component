/* Importing the React Function Component type. */
import { useState, FC, MouseEvent, AnimationEvent } from 'react';
// Component
import { Tooltip } from '../../Tooltip/Tooltip';
// Types
import { ChartBarProps } from './ChartBar.model';
// Classes
import classes from './ChartBar.module.scss';

export const ChartBar: FC<ChartBarProps> = props => {
	const [hovered, setHovered] = useState(false);
	const [animationEnd, setAnimationEnd] = useState(false);

	const mouseOverHandler = (_: MouseEvent<HTMLDivElement> | null) =>
		setHovered(true);

	const mouseLeaveHandler = (_: MouseEvent<HTMLDivElement> | null) =>
		setHovered(false);

	const animationEndHandler = (_: AnimationEvent<HTMLDivElement> | null) =>
		setAnimationEnd(true);

	return (
		<div
			className={`${classes.chartBar} ${props.className} ${
				animationEnd && props.maxAmount === props.amount
					? classes.maxAmount
					: ''
			}`}
			onMouseOver={mouseOverHandler}
			onMouseLeave={mouseLeaveHandler}
			onAnimationEnd={animationEndHandler}
			aria-describedby="#tooltip"
		>
			<Tooltip isShown={hovered} amount={props.amount} />
		</div>
	);
};
