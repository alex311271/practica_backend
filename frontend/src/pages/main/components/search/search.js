import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon, Input } from '../../../../components';

const SearchContainer = ({ className, searchPhrase, onChange }) => {
	return (
		<div className={className}>
			<Input value={searchPhrase} placeholder="Поиск по заголовкам" onChange={onChange} />
			<Icon id="fa-search" size="18px" inactive={true} />
		</div>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	position: relative;
	margin: 40px auto 0;
	width: 340px;

	& > input {
		padding: 10px 30px 10px 10px;
	}

	& > div {
		position: absolute;
		right: 7px;
		top: 6px;
	}
`;

Search.propTypes = {
	searchPhrase: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
