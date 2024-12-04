import CustomColumn from '../../components/CustomColumn';
import CustomButton from '../../components/CustomButton';
import CustomFont from '../../components/CustomFont';
import CustomBox from '../../components/CustomBox';
import CustomRow from '../../components/CustomRow';

import Modal from '../../components/Modal';
import StyledInput from './StyledInput';

import { TiDeleteOutline } from "react-icons/ti";
import { IoSearchOutline } from "react-icons/io5";

interface PeopleSearchProps {
	isModalOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
}

function PeopleSearch({ isModalOpen, onClose, onConfirm }: PeopleSearchProps) {

	return (

		<Modal isOpen={isModalOpen} onClose={onClose}>
			<CustomColumn $width='100%' $height='45vh' $alignitems='center' $justifycontent='space-between'>

				<CustomColumn $width='100%' $height='auto' $alignitems='center' $justifycontent='center' $gap='2rem'>
					<CustomFont $color='black' $font='1rem'>
						아이디를 검색해주세요.
					</CustomFont>

					<CustomRow $width='90%' $height='auto' $gap='1rem'>
						<StyledInput
							$width="90%"
							$height="auto"
							$border="1px solid #D9D9D9"
							$borderRadius="0.5rem"
							$padding="0.5rem"
							placeholder="ID를 검색하세요."
						/>

						<CustomButton $width='10%' $height='auto' $padding='0' $backgroundColor='transparent'>
							<IoSearchOutline style={{ color: 'black', fontSize: '1.5rem' }} />
						</CustomButton>
					</CustomRow>

					<CustomColumn $width='100%' $height='auto' $alignitems='center' $justifycontent='center' $gap='0.5rem'>
						<CustomRow $width='90%' $height='auto' $gap='0.5rem'>
							<CustomBox $width='90%' $height='auto' $alignitems='center' $justifycontent='flex-start' $padding='0.2rem'
								$backgroundcolor='white' $border='1px solid #D9D9D9'>
								<CustomFont $color='black' $font='1rem'>아이디1</CustomFont>
							</CustomBox>
							<CustomButton $width='10%' $height='auto' $padding='0' $backgroundColor='transparent'>
								<TiDeleteOutline style={{ color: 'red', fontSize: '1.2rem' }} />
							</CustomButton>
						</CustomRow>

						<CustomRow $width='90%' $height='auto' $gap='0.5rem'>
							<CustomBox $width='90%' $height='auto' $alignitems='center' $justifycontent='flex-start' $padding='0.2rem'
								$backgroundcolor='white' $border='1px solid #D9D9D9'>
								<CustomFont $color='black' $font='1rem'>아이디2</CustomFont>
							</CustomBox>
							<CustomButton $width='10%' $height='auto' $padding='0' $backgroundColor='transparent'>
								<TiDeleteOutline style={{ color: 'red', fontSize: '1.2rem' }} />
							</CustomButton>
						</CustomRow>
					</CustomColumn>
				</CustomColumn>

				<CustomButton $backgroundColor='#D9D9D9' $width='90%' $height='auto' $padding='0.5rem' onClick={onConfirm}>
					<CustomFont $color='black' $font='1rem'>확정하기</CustomFont>
				</CustomButton>
			</CustomColumn>
		</Modal>
	);
}

export default PeopleSearch;
