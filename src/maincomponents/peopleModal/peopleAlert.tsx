import CustomColumn from '../../components/CustomColumn';
import CustomButton from '../../components/CustomButton';
import CustomFont from '../../components/CustomFont';

import Modal from '../../components/Modal';

interface PeopleAlertProps {
	isModalOpen: boolean;
	onClose: () => void;
}

function PeopleAlert({ isModalOpen, onClose }: PeopleAlertProps) {

	return (

		<Modal isOpen={isModalOpen} onClose={onClose}>
			<CustomColumn $width='100%' $height='45vh' $alignitems='center' $justifycontent='space-between'>

				<CustomColumn $width='100%' $height='auto' $gap='1rem' $alignitems='center' $justifycontent='center'>
					<CustomFont $color='black' $font='1rem'>
						그리기를 시작합니다!
					</CustomFont>
					<CustomFont $color='black' $font='0.8rem'>
						지금부터 내 위치가 실시간으로 지도 위에 그려지고,
					</CustomFont>
					<CustomFont $color='black' $font='0.8rem'>
						함께 그리는 사람들이 내 위치를 볼 수 있게 됩니다.
					</CustomFont>
				</CustomColumn>

				<CustomButton $backgroundColor='#D9D9D9' $width='90%' $height='auto' $padding='0.5rem' onClick={onClose}>
					<CustomFont $color='black' $font='1rem'>확인</CustomFont>
				</CustomButton>
			</CustomColumn>
		</Modal>
	);
}

export default PeopleAlert;
