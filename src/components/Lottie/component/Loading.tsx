import Lottie from "react-lottie-player";
import lottieJson from '../Json/LottieLoading.json';

export default function Loading() {
	return <Lottie loop animationData={lottieJson} play />;
}