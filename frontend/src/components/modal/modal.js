import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Button } from '../button/button';
import {
	selectModalCancel,
	selectModalOpen,
	selectModalConfirm,
	selectModalText,
} from '../../selectors';

const ModalContainer = ({ className }) => {
	const isOpen = useSelector(selectModalOpen);
	const text = useSelector(selectModalText);
	const onConfirm = useSelector(selectModalConfirm);
	const onCancel = useSelector(selectModalCancel);

	if (!isOpen) {
		return null;
	}

	return (
		<div className={className}>
			<div className="overlay"></div>
			<div className="box">
				<h3>{text}</h3>
				<div className="buttons">
					<Button width="100px" onClick={onConfirm}>
						Да
					</Button>
					<Button width="100px" onClick={onCancel}>
						Отмена
					</Button>
				</div>
			</div>
		</div>
	);
};

export const Modal = styled(ModalContainer)`
	position: fixed;
	z-index: 101;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	& .overlay {
		position: absolute;
		background-color: rgba(0, 0, 0, 0.7);
		width: 100%;
		height: 100%;
	}

	& .box{
		// display: flex;
		// flex-direction: column;
		// align-items: center;
		// justify-content: center;
		position: relative;
		top: 50%;
		transform: translate(0, -50%);
		width: 300px;
		margin: 0 auto;
		text-align: center;
		background: #fff;
		border: 3px solid #000;
		border-radius: 15px;
		padding: 0 10px 20px;
		z-index: 102;

	}

	& .buttons{
		display: flex;
		justify-content: space-around;
	}
`;
