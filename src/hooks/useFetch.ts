import { useEffect, useState } from 'react';

export const useFetch = <T>(
	url: string
): [T | null, boolean, string | null] => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const fetchData = async () => {
		try {
			setLoading(true);
			const response = await fetch(url);
			if (!response.ok) throw new Error('Something went wrong!');
			const fetchedData = await response.json();
			setData(fetchedData);
		} catch (error: any | null) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, [url]);

	return [data, loading, error];
};
