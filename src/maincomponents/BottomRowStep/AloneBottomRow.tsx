import React from "react";
import styled from "styled-components";
import CustomButton from "../../components/CustomButton";
import CustomFont from "../../components/CustomFont";

const BottomAbsoluteRow = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  z-index: 10;
  gap: 1rem;
`;

interface AloneBottomRowProps {
	onCancelClick: () => void;
	onDrawClick: () => void;
}

const AloneBottomRow: React.FC<AloneBottomRowProps> = ({ onCancelClick, onDrawClick }) => {
	return (
		<BottomAbsoluteRow>
			<CustomButton
				$backgroundColor="red"
				$width="10rem"
				$height="auto"
				$padding="0.5rem"
				onClick={onCancelClick}
			>
				<CustomFont $color="white" $font="1rem">
					혼자 그리기 취소
				</CustomFont>
			</CustomButton>

			<CustomButton
				$backgroundColor="#D9D9D9"
				$width="10rem"
				$height="auto"
				$padding="0.5rem"
				onClick={onDrawClick}
			>
				<CustomFont $color="black" $font="1rem">
					혼자 그리기 시작
				</CustomFont>
			</CustomButton>
		</BottomAbsoluteRow>
	);
};

export default AloneBottomRow;
