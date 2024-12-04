import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import ReactPortal from './ReactPortal';

import CustomFont from './CustomFont';
import CustomRow from './CustomRow';
import CustomButton from './CustomButton';

const ModalOverlay = styled.div`
    position: fixed;
	top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 420px;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContainer = styled.div`
    background-color: white;
    width: 330px;
    height: 530px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1001;
    gap: 3rem;
	border-radius: 1rem;
`;

interface ModalProps {
	isOpen: boolean;
	onClose: MouseEventHandler<HTMLDivElement>;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	// 모달이 열려있을 때만 렌더링
	if (!isOpen) return null;

	return (
		<ReactPortal>
			<ModalOverlay onClick={onClose}>
				<CustomRow $width='100%' $height='auto' $alignitems='flex-start' $justifycontent='center' $gap='1rem'>
					<ModalContainer onClick={(e) => e.stopPropagation()}>

						<CustomFont $color='black' $font='1rem' $fontweight='bold'>이건 모달</CustomFont>

					</ModalContainer>
					<CustomButton $backgroundColor='transparent' $width='auto' $height='auto' $padding='0'>
						<CustomFont $color='white' $font='1rem'>X</CustomFont>
					</CustomButton>
				</CustomRow>
			</ModalOverlay>
		</ReactPortal>
	);
};

export default Modal;