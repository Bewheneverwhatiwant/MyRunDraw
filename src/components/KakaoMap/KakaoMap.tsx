import { useEffect, useState } from "react";
import MarkerData from '../../assets/markData.json';
import { CgSpinner } from "react-icons/cg";

declare global {
	interface Window {
		kakao: any;
	}
}

interface Marker {
	이름: string;  // 공공 체육시설 이름
	위도: number;
	경도: number;
}

const KakaoMap = () => {
	const [mapisLoading, setMapisLoading] = useState(true);
	const markers: any[] = []; // 이 부분 경고 안나도록 하는 거 포기...

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

		const getCurrentLocation = () => {
			return new Promise<{ lat: number; lng: number }>((resolve, reject) => {
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(
						(position) => {
							const { latitude, longitude } = position.coords;
							resolve({ lat: latitude, lng: longitude });
						},
						(error) => {
							console.error("위치 정보 가져오기 실패:", error);
							reject(error);
						}
					);
				} else {
					reject(new Error("Geolocation을 지원하지 않는 브라우저입니다."));
				}
			});
		};

		const initializeMap = async () => {
			try {
				await loadKakaoMap();
				setMapisLoading(false);
				const { lat, lng } = await getCurrentLocation();
				console.log("사용자 위치:", lat, lng);

				const mapContainer = document.getElementById("map");
				if (!mapContainer) {
					console.error("지도 컨테이너를 찾을 수 없습니다.");
					return;
				}

				// 지도 옵션 설정
				const mapOption = {
					center: new window.kakao.maps.LatLng(lat, lng),
					level: 3,
				};
				const map = new window.kakao.maps.Map(mapContainer, mapOption);

				const clusterer = new window.kakao.maps.MarkerClusterer({
					map: map,  // 클러스터러가 관리할 지도
					averageCenter: true, // 마커가 중심에 모이도록 설정
					minLevel: 10, // 클러스터링을 적용할 줌 레벨
				});

				// 사용자 위치를 나타내는 커스텀 마커
				const userMarkerImage = new window.kakao.maps.MarkerImage(
					'src/assets/icon_mySpot.png',
					new window.kakao.maps.Size(32, 32), // 이미지 크기
					{ offset: new window.kakao.maps.Point(16, 32) } // 마커 기준 좌표
				);

				const userMarker = new window.kakao.maps.Marker({
					position: new window.kakao.maps.LatLng(lat, lng),
					map: map,
					image: userMarkerImage,
				});

				// 사용자 위치 마커 킬릭하면 열리는 인포윈도우
				const userInfoWindow = new window.kakao.maps.InfoWindow({
					content: "<div>현재 위치</div>",
				});

				let isOpen = false;

				window.kakao.maps.event.addListener(userMarker, "click", () => {
					if (isOpen) {
						userInfoWindow.close();
					} else {
						userInfoWindow.open(map, userMarker);
					}
					isOpen = !isOpen;
				});

				markers.push(userMarker);

				(MarkerData as Marker[]).forEach((marker) => {
					const { 위도, 경도, 이름 } = marker;
					const markerPosition = new window.kakao.maps.LatLng(위도, 경도);

					// 체육시설 마커 이미지
					const facilityMarkerImage = new window.kakao.maps.MarkerImage(
						'src/assets/icon_Shoe.png',
						new window.kakao.maps.Size(32, 32),
						{ offset: new window.kakao.maps.Point(16, 32) }
					);

					// 체육시설 마커
					const markerInstance = new window.kakao.maps.Marker({
						position: markerPosition,
						image: facilityMarkerImage,
					});

					// 마커를 클러스터러에 추가
					markers.push(markerInstance);

					// 마커 클릭 시 인포윈도우
					const infowindow = new window.kakao.maps.InfoWindow({
						content: `<div>${이름}</div>`,
					});
					window.kakao.maps.event.addListener(markerInstance, "click", () => {
						infowindow.open(map, markerInstance);
					});
				});

				// 클러스터러에 마커 추가
				clusterer.addMarkers(markers);

				console.log("지도 범위 설정 완료");
			} catch (error) {
				console.error("지도 초기화 중 오류 발생:", error);
			}
		};


		initializeMap();
	}, []);

	return (
		<>
			{mapisLoading ? (
				<div className="w-full h-[90vh] text-center text-white flex justify-center">
					<CgSpinner className="animate-spin w-[100px] h-[100px]" />
				</div>
			) : (
				<div id="map" style={{ width: "100%", height: "100vh" }} />
			)}
		</>
	);
};

export default KakaoMap;
