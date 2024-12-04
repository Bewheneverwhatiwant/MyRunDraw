import Lottie from "react-lottie-player";
import lottieJson from '../../assets/LottieJson/LottieLoading.json';

export default function Loading() {
	return <Lottie loop animationData={lottieJson} play />;
}