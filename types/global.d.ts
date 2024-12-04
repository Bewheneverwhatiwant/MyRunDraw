// src/types/global.d.ts

declare global {
	interface Window {
		kakao: any;  // kakao 객체의 타입을 any로 지정
	}

	// kakao.maps 네임스페이스 확장
	namespace kakao.maps {
		interface Marker {
			position: any;
			map: any;
			image: any;
		}
	}
}

export { };  // 모듈화 처리
