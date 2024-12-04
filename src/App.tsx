import styled from "styled-components";
import CustomColumn from "./components/CustomColumn";

import TopRow from "./maincomponents/TopRow";
import KakaoMap from "./components/KakaoMap/KakaoMap";
import BottomRow from "./maincomponents/BottomRow";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <CustomColumn
      $width="100%"
      $minHeight="100vh"
      $gap="0"
      $alignitems="center"
      $justifycontent="flex-start"
    >
      <Wrapper>
        <TopRow />
        <KakaoMap />
        <BottomRow />
      </Wrapper>
    </CustomColumn>
  );
}

export default App;
