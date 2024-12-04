import { useState } from "react";
import styled from "styled-components";

import CustomFont from "../components/CustomFont";
import CustomRow from "../components/CustomRow";
import CustomButton from "../components/CustomButton";

const BottomAbsoluteRow = styled(CustomRow)`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 10;
`;

function BottomRow() {
	const [isFirstRow, setIsFirstRow] = useState(true);

	return (
		<BottomAbsoluteRow
			$height="auto"
			$alignitems="center"
			$justifycontent="center"
			$padding="2rem"
		>
			{isFirstRow ? (
				<CustomButton
					$backgroundColor="#D9D9D9"
					$width="10rem"
					$height="auto"
					$padding="0.5rem"
					onClick={() => setIsFirstRow(false)}
				>
					<CustomFont $color="black" $font="1rem">
						그리기 시작
					</CustomFont>
				</CustomButton>
			) : (
				<>
					<CustomButton
						$backgroundColor="#D9D9D9"
						$width="10rem"
						$height="auto"
						$padding="0.5rem"
					>
						<CustomFont $color="black" $font="1rem">
							혼자 그리기
						</CustomFont>
					</CustomButton>

					<CustomButton
						$backgroundColor="red"
						$width="10rem"
						$height="auto"
						$padding="0.5rem"
						onClick={() => setIsFirstRow(true)}
					>
						<CustomFont $color="white" $font="1rem">
							그리기 취소
						</CustomFont>
					</CustomButton>

					<CustomButton
						$backgroundColor="#D9D9D9"
						$width="10rem"
						$height="auto"
						$padding="0.5rem"
					>
						<CustomFont $color="black" $font="1rem">
							같이 그리기
						</CustomFont>
					</CustomButton>
				</>
			)}
		</BottomAbsoluteRow>
	);
}

export default BottomRow;
