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
        {/* <TopRow /> 추적 시작, 추적 종료 버튼 테스트를 위해 잠시 주석 처리 */}
        <KakaoMap />
        <BottomRow />
      </Wrapper>
    </CustomColumn>
  );
}

export default App;
