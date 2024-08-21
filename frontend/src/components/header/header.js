import styled from 'styled-components';
import { ControlPanel, Logo } from './components';

const Discription = styled.div``;

const HeaderContainer = ({ className }) => (
	<header className={className}>
		<Logo />
		<Discription>
			Картинки из путешествий
			<br />
			и ассоциации
			<br />
			связанные с ними
		</Discription>
		<ControlPanel />
	</header>
);

export const Header = styled(HeaderContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	height: 120px;
	width: 62.5rem;
	background-color: #fff;
	padding: 1rem 2.5rem;
	box-shadow: 0 -0.125rem 1rem #000;
	z-index: 100;
`;
