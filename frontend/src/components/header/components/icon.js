import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconContainer = ({ className, id, onClick, inactive, ...props }) => (
	<div className={className} onClick={onClick} {...props}>
		<i className={`fa ${id}`} aria-hidden="true"></i>
	</div>
);

export const Icon = styled(IconContainer)`
	font-size: ${({ size = '24px' }) => size};
	margin: ${({ margin = '0' }) => margin};
	color: ${({ disabled }) => (disabled ? '#ccc' : '#000')};
	&:hover {
		cursor: ${({ inactive }) => (inactive ? 'default' : 'pointer')};
	}
`;

Icon.propTypes = {
	id: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	inactive: PropTypes.bool,
};
