import CustomColumn from "./components/CustomColumn"
import CustomFont from "./components/CustomFont"
import KakaoMap from "./components/KakaoMap/KakaoMap"
import Loading from "./components/Lottie/component/Loading"

function App() {

  return (
    <CustomColumn $width="100%" $minHeight='100vh'>
      <CustomFont $color='black' $font='1rem'>안뇽!</CustomFont>
      <Loading />
      <KakaoMap />
    </CustomColumn>
  )
}

export default App
