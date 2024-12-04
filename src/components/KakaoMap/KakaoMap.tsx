import { useEffect, useState } from "react";
import markerData from '../../assets/markData.json';
import { CgSpinner } from "react-icons/cg";

// JSON 데이터 타입
interface Marker {
	이름: string;  // 공공 체육시설 이름
	위도: number;
	경도: number;
}

declare global {
	interface Window {
		kakao: any;
	}
}

const KakaoMap = () => {
	const [mapIsLoading, setMapIsLoading] = useState(true);

	useEffect(() => {
		const loadKakaoMap = () => {
			return new Promise<void>((resolve, reject) => {
				if (window.kakao && window.kakao.maps) {
					window.kakao.maps.load(() => resolve());
				} else {
					reject(new Error("Kakao 지도 API 로드 실패"));
				}
			});
		};

		const initializeMap = async () => {
			try {
				await loadKakaoMap();

				const mapContainer = document.getElementById("map");
				if (!mapContainer) {
					console.error("지도 컨테이너를 찾을 수 없습니다.");
					return;
				}

				const mapOption = {
					center: new window.kakao.maps.LatLng(37.336880, 127.252222),
					level: 3,
				};

				const map = new window.kakao.maps.Map(mapContainer, mapOption);

				const bounds = new window.kakao.maps.LatLngBounds();

				// markerData의 타입은 Marker[]
				(markerData as Marker[]).forEach((marker) => {
					const { 위도, 경도, 이름 } = marker;

					const markerPosition = new window.kakao.maps.LatLng(위도, 경도);

					const markerInstance = new window.kakao.maps.Marker({
						position: markerPosition,
						map: map,
					});

					bounds.extend(markerPosition);

					const infowindow = new window.kakao.maps.InfoWindow({
						content: `<div style="padding:5px;">${이름}</div>`,
					});

					window.kakao.maps.event.addListener(markerInstance, "click", () => {
						infowindow.open(map, markerInstance);
					});
				});

				map.setBounds(bounds);

				// 지도 초기화 완료 후 로딩 상태 업데이트
				setMapIsLoading(false);
			} catch (error) {
				console.error("지도 초기화 중 오류 발생:", error);
			}
		};

		initializeMap();
	}, []);

	return (
		<div style={{ position: "relative", width: "100%", height: "50vh" }}>
			<div id="map" style={{ width: "100%", height: "100%" }}></div>
			{mapIsLoading && (
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: "rgba(255, 255, 255, 0.7)",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<CgSpinner className="animate-spin w-[100px] h-[100px]" />
				</div>
			)}
		</div>
	);
};

export default KakaoMap;
