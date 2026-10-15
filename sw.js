// 서비스 워커: 크롬이 "설치 가능한 앱"으로 인정하게 해주는 최소한의 파일입니다.
// 일부러 아무것도 저장(캐시)하지 않습니다.
// → index.html을 GitHub에 새로 올리면 홈 화면 아이콘으로 열어도 항상 최신 버전이 뜹니다.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});   // 요청은 그대로 인터넷으로 보냄
