import CustomColumn from '../../components/CustomColumn';
import CustomButton from '../../components/CustomButton';
import CustomFont from '../../components/CustomFont';
import CustomBox from '../../components/CustomBox';
import CustomRow from '../../components/CustomRow';

import Modal from '../../components/Modal';

import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

interface PeopleSearchProps {
	isModalOpen: boolean;
	onClose: () => void;
}

function PeopleTurn({ isModalOpen, onClose }: PeopleSearchProps) {

	return (

		<Modal isOpen={isModalOpen} onClose={onClose}>
			<CustomColumn $width='100%' $height='45vh' $alignitems='center' $justifycontent='space-between'>

				<CustomColumn $width='100%' $height='auto' $alignitems='center' $justifycontent='center' $gap='2rem'>
					<CustomFont $color='black' $font='1rem'>
						그릴 순서를 정해주세요.
					</CustomFont>

					<CustomColumn $width='100%' $height='auto' $alignitems='center' $justifycontent='center' $gap='0.5rem'>
						<CustomRow $width='90%' $height='auto' $gap='0.5rem'>
							<CustomFont $color='green' $font='1rem'>
								1
							</CustomFont>
							<CustomBox $width='70%' $height='auto' $alignitems='center' $justifycontent='flex-start' $padding='0.5rem'
								$backgroundcolor='white' $border='1px solid #D9D9D9'>
								<CustomFont $color='black' $font='1rem'>아이디1</CustomFont>
							</CustomBox>
							<CustomButton $width='10%' $height='auto' $padding='0.5rem' $backgroundColor='transparent' $border='1px solid #D9D9D9'>
								<FaArrowDown style={{ color: '#D9D9D9', fontSize: '1.2rem' }} />
							</CustomButton>

							<CustomButton $width='10%' $height='auto' $padding='0.5rem' $backgroundColor='transparent' $border='1px solid #D9D9D9'>
								<FaArrowUp style={{ color: '#D9D9D9', fontSize: '1.2rem' }} />
							</CustomButton>
						</CustomRow>

						<CustomRow $width='90%' $height='auto' $gap='0.5rem'>
							<CustomFont $color='green' $font='1rem'>
								2
							</CustomFont>
							<CustomBox $width='70%' $height='auto' $alignitems='center' $justifycontent='flex-start' $padding='0.5rem'
								$backgroundcolor='white' $border='1px solid #D9D9D9'>
								<CustomFont $color='black' $font='1rem'>아이디2</CustomFont>
							</CustomBox>
							<CustomButton $width='10%' $height='auto' $padding='0.5rem' $backgroundColor='transparent' $border='1px solid #D9D9D9'>
								<FaArrowDown style={{ color: '#D9D9D9', fontSize: '1.2rem' }} />
							</CustomButton>

							<CustomButton $width='10%' $height='auto' $padding='0.5rem' $backgroundColor='transparent' $border='1px solid #D9D9D9'>
								<FaArrowUp style={{ color: '#D9D9D9', fontSize: '1.2rem' }} />
							</CustomButton>
						</CustomRow>

					</CustomColumn>
				</CustomColumn>

				<CustomButton $backgroundColor='#D9D9D9' $width='90%' $height='auto' $padding='0.5rem' onClick={onClose}>
					<CustomFont $color='black' $font='1rem'>같이 그리기 시작</CustomFont>
				</CustomButton>
			</CustomColumn>
		</Modal>
	);
}

export default PeopleTurn;
