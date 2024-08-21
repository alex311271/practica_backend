import styled from 'styled-components';
import { H2 } from '../h2/h2';
import { PROP_TYPE } from '../../constants';

const Div = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 18px;
`;

export const FormError = ({ error }) =>
	error && (
		<Div>
			<H2>Ошибка</H2>
			<div>{error}</div>
		</Div>
	);

FormError.propTypes = {
	error: PROP_TYPE.ERROR,
};
