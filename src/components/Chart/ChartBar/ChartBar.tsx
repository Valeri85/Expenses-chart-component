/* Importing the React Function Component type. */
import { useState, FC, MouseEvent, AnimationEvent, useId } from 'react';
// Component
import { Tooltip } from '../../Tooltip/Tooltip';
// Types
import { ChartBarProps } from './ChartBar.model';
// Classes
import classes from './ChartBar.module.scss';

export const ChartBar: FC<ChartBarProps> = props => {
	const [hovered, setHovered] = useState(false);
	const [animationEnd, setAnimationEnd] = useState(false);
	const id = useId();

	const mouseOverHandler = () => setHovered(true);

	const mouseLeaveHandler = () => setHovered(false);

	const animationEndHandler = () => setAnimationEnd(true);

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
			aria-describedby={id}
		>
			<Tooltip id={id} isShown={hovered} amount={props.amount} />
		</div>
	);
};
