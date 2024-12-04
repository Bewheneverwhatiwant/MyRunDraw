import styled from "styled-components";

interface StyledInputProps {
	$width?: string;
	$height?: string;
	$margin?: string;
	$padding?: string;
	$border?: string;
	$borderRadius?: string;
	placeholder?: string;
}

const StyledInput = styled.input<StyledInputProps>`
  display: flex;
  flex-direction: row;
  width: ${(props) => props.$width || "auto"};
  height: ${(props) => props.$height || "auto"};
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "0"};
  border: ${(props) => props.$border || "none"};
  border-radius: ${(props) => props.$borderRadius || "none"};
`;

export default StyledInput;
