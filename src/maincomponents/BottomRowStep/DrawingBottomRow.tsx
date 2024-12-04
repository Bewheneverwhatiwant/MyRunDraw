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

interface DrawingBottomRowProps {
	onGoFirstClick: () => void;
}

const DrawingBottomRow: React.FC<DrawingBottomRowProps> = ({ onGoFirstClick }) => {
	return (
		<BottomAbsoluteRow>
			<CustomButton
				$backgroundColor="red"
				$width="10rem"
				$height="auto"
				$padding="0.5rem"
				onClick={onGoFirstClick}
			>
				<CustomFont $color="white" $font="1rem">
					완료
				</CustomFont>
			</CustomButton>

			<CustomButton
				$backgroundColor="#D9D9D9"
				$width="10rem"
				$height="auto"
				$padding="0.5rem"
			>
				<CustomFont $color="black" $font="1rem">
					멈춤/시작
				</CustomFont>
			</CustomButton>
		</BottomAbsoluteRow>
	);
};

export default DrawingBottomRow;
