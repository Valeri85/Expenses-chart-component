/* Importing the styled-components library. */
import styled from 'styled-components';
// Component
import { ChartBar } from './ChartBar';

export const StyledChartBar = styled(ChartBar)`
	height: calc((${props => props.amount}%) * 1.5);
	animation: grow calc((${props => props.amount}ms) * 30) forwards ease-out;

	@keyframes grow {
		0% {
			height: 0;
		}
	}
`;
