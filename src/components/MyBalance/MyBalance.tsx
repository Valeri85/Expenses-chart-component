import { FC } from 'react';
// Classes
import classes from './MyBalance.module.scss';
// Logo
import logo from '../../assets/images/logo.svg';

export const MyBalance: FC = () => (
	<header className={classes.header}>
		<h2 className={classes.text}>My balance</h2>
		<data className={classes.balance} value="921.48">
			<abbr title="USD">$</abbr>921.48
		</data>
		<a
			className={classes.logoLink}
			href="#"
			aria-label="Logo - Go to home page"
		>
			<img src={logo} alt="Site logo" width="72" height="48" />
		</a>
	</header>
);
