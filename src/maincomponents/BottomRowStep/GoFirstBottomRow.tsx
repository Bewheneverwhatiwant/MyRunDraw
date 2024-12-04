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
`;

interface GoFirstBottomRowProps {
	onClick: () => void;
}

const GoFirstBottomRow: React.FC<GoFirstBottomRowProps> = ({ onClick }) => {
	return (
		<BottomAbsoluteRow>
			<CustomButton
				$backgroundColor="#D9D9D9"
				$width="10rem"
				$height="auto"
				$padding="0.5rem"
				onClick={onClick}
			>
				<CustomFont $color="black" $font="1rem">
					처음으로
				</CustomFont>
			</CustomButton>
		</BottomAbsoluteRow>
	);
};

export default GoFirstBottomRow;
