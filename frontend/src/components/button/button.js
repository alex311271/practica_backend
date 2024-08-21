import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = ({ children, className, width, margin, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	display: flex;
	font-size: 1.125rem;
	width: ${({ width = '100%' }) => width};
	height: 2rem;
	border: 1px solid #000;
	border-radius: 0.5rem;
	justify-content: center;
	align-items: center;
	background-color: #eee;
	margin: ${(margin = '0 0 0 0') => margin}

	&:hover {
		cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
	}
`;

Button.propTypes = {
	children: PropTypes.node.isRequired,
	width: PropTypes.string,
};
