import styled from "styled-components";
import CustomFont from "../components/CustomFont";
import CustomRow from "../components/CustomRow";
import CustomButton from "../components/CustomButton";

const AbsoluteRow = styled(CustomRow)`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
`;

function TopRow() {
	return (
		<AbsoluteRow
			$height="auto"
			$alignitems="center"
			$justifycontent="space-between"
			$padding="1rem"
		>
			<CustomButton
				$width="auto"
				$height="auto"
				$padding="0.5rem"
				$borderRadius="0.5rem"
				$backgroundColor="#D9D9D9"
			>
				<CustomFont $color="black" $font="1rem">
					둘러보기
				</CustomFont>
			</CustomButton>

			<CustomButton
				$width="auto"
				$height="auto"
				$padding="0.5rem"
				$borderRadius="0.5rem"
				$backgroundColor="#D9D9D9"
			>
				<CustomFont $color="black" $font="1rem">
					로그아웃
				</CustomFont>
			</CustomButton>
		</AbsoluteRow>
	);
}

export default TopRow;
