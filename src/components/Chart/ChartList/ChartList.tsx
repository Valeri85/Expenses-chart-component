/* Importing the `FC` type from the `react` library. */
import { FC } from 'react';
// Component
import { ChartItem } from '../ChartItem/ChartItem';
// Hook
import { useFetch } from '../../../hooks/useFetch';
// Types
import { dataModel } from '../../../assets/data/data.model';
// Classes
import classes from './ChartList.module.scss';

export const ChartList: FC = () => {
	const [data, loading, error] = useFetch<dataModel[]>(
		'../../src/assets/data/data.json'
	);

	const maxAmount = data?.reduce(
		(currAmount, expensesArray) =>
			(currAmount =
				currAmount > expensesArray.amount
					? currAmount
					: expensesArray.amount),
		0
	);

	return loading && !error ? (
		<p className={classes.message}>Loading...</p>
	) : error ? (
		<p className={classes.message}>{error}</p>
	) : (
		<ul className={classes.chartList}>
			{data?.map((expItem, index) => (
				<ChartItem key={index} {...expItem} maxAmount={maxAmount} />
			))}
		</ul>
	);
};
