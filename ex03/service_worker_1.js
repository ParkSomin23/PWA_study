const sCacheName = 'hello-pwa-v1';
const aFilesToCache =  [
    './', './index.html', './manifest.json', './images/hello-pwa.png',
    './images/icons/android-chrome-192x192.png', './images/icons/favicon.ico'
];

// 서비스 설치 및 캐시 저장
self.addEventListener('install', pEvent => {
    console.log('서비스 워커 설치함!');
    pEvent.waitUntil(
        caches.open(sCacheName)
        .then(pCache => {
            console.log('파일을 캐시에 저장함!');
            return pCache.addAll(aFilesToCache);
        })
    )
});

//고유 번호 할당받은 서비스 워커 작동
self.addEventListener('active', pEvent => {
    console.log('서비스워커 동작 시작됨')
});

// 데이터 요청 받으면 네트워크 또는 캐시에서 찾아서 반환
self.addEventListener('fetch', pEvent => {
    pEvent.respondWith(
        caches.match(pEvent.request)
        .then(response => {
            if (!response) {
                console.log('네트워크에서 데이터 요청', pEvent.request);
                return fetch(pEvent.request)
            }

            console.log('캐시에서 데이터 요청', pEvent.request);
            return response;
        }).catch(err => console.log(err))
    );
});
