/* Importing the `FC` type from the `react` package. */
import { FC } from 'react';
// Classes
import classes from './Footer.module.scss';

/**
 * It's a React functional component that returns a footer element with
 * 1) Link to the Frontend Mentor website,
 * 2) Link to my profile on the Frontend Mentor website.
 */
export const Footer: FC = () => (
	<footer className={classes.footer}>
		<p className={classes.text}>
			Challenge by{' '}
			<a
				className={classes.frontEndMentorLink}
				href="https://www.frontendmentor.io?ref=challenge"
				target="_blank"
				rel="noopener"
			>
				Frontend Mentor
			</a>
			.
		</p>
		<p className={classes.text}>
			Coded by{' '}
			<a
				className={classes.frontEndMentorLink}
				href="https://www.frontendmentor.io/profile/Valeri85"
				target="_blank"
				rel="noopener"
			>
				Valeri
			</a>
			.
		</p>
	</footer>
);
