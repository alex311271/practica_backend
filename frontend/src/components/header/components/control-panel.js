import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from './index';
import { Button } from '../../button/button';
import { ROLE } from '../../../constants';
import { selectUserRole, selectUserLogin } from '../../../selectors';
import { logout } from '../../../actions/logout';
import { checkAccess } from '../../../utils';

const RightAlined = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const UserName = styled.div`
	font-size: 18px;
	font-weight: bold;
	margin: 0 16px 0 0px;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);

	const onLogout = () => {
		dispatch(logout());
		sessionStorage.removeItem('userData');
	};

	const isAdmin = checkAccess([ROLE.ADMIN], roleId);

	return (
		<div className={className}>
			<RightAlined>
				{roleId === ROLE.GUEST ? (
					<Button>
						<Link to="/login">Войти</Link>
					</Button>
				) : (
					<>
						<UserName>{login}</UserName>
						<Icon
							id="fa fa-sign-out"
							size="1.3rem"
							margin="2.5px 0 2.5px 0"
							onClick={onLogout}
						/>
					</>
				)}
			</RightAlined>
			<RightAlined>
				<Icon
					id="fa fa-backward"
					size="1.3rem"
					margin="1rem 1rem 0 0"
					onClick={() => navigate(-1)}
				/>

				{isAdmin && (
					<>
						<Link to="/post">
							<Icon id="fa-file-text-o" size="1.3rem" margin="1rem 0 0 0" />
						</Link>
						<Link to="/users">
							<Icon id="fa-users" size="1.3rem" margin=" 1rem 0 0 1rem " />
						</Link>
					</>
				)}
			</RightAlined>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
