2026-11-11 16:08:33+09:00 / 11주차 게임기획안 양식에 맞춰 spec.md 작성 / spec.md, prompt.txt, work-log.md / 양식 원안의 산 생존·동물 전투·능력치 성장과 사용자가 선택한 블록 단위 건축을 기준으로 범위를 정함.
2026-11-11 16:11 / MVP 구현 작업 목록 재작성 / tasks.md, prompt.txt, work-log.md / 명세의 MVP만을 작은 검증·커밋 단위로 나누고 각 항목에 Live Server 확인 기준을 명시함.
2026-11-11 16:18 / 시작·플레이·결과 장면 분리 및 재시작 흐름 구현 / index.html, js/main.js, js/scenes/StartScene.js, js/scenes/GameScene.js, js/scenes/ResultScene.js, tasks.md, prompt.txt, work-log.md / 결과 데이터는 플레이 장면에서 결과 장면으로 전달하고 다시 하기는 동일 스테이지를 새로 시작하도록 구성함.
2026-11-11 16:21 / 기본 모듈 구조 분리 / js/state/GameState.js, js/input/PlayerInput.js, js/combat/CombatSystem.js, js/building/BuildingSystem.js, js/scenes/GameScene.js, tasks.md, prompt.txt, work-log.md / 기존 장면 전환을 유지하면서 입력·상태·전투·건축의 책임 경계를 별도 모듈로 마련함.
2026-11-11 16:35 / 모바일 2D 생존 게임 명세와 작업 목록 갱신 / spec.md, tasks.md, prompt.txt, work-log.md / 관찰자 시점과 1인칭 2D 행동 화면 전환을 중심으로 자원·전투·방향별 벽 건축 흐름을 재정의함.
2026-11-11 16:39 / 세 맵과 30일 건축 해금 조건 반영 / spec.md, tasks.md, prompt.txt, work-log.md / 맵별 생존 후 건축하는 진행 구조를 세 개의 가상 지역과 순차 완료 조건으로 구체화함.
2026-11-11 16:44 / 모바일 세로 화면 비율 적용 / index.html, js/main.js, js/scenes/StartScene.js, js/scenes/GameScene.js, js/scenes/ResultScene.js, tasks.md, prompt.txt, work-log.md / 540×960 캔버스와 세로 레이아웃으로 기존 장면 전환을 유지하면서 모바일 화면 기준을 맞춤.
2026-11-18 15:48 / 게임 디자인 가이드 작성 / design.md, prompt.txt, work-log.md / 명세의 모바일 2D 생존·관찰자 및 행동 시점 전환에 맞춰 제한된 팔레트와 단순한 카툰 UI 기준을 정의함.
2026-11-18 15:56 / 화면 중앙 정렬 및 전투 조작·색상 기준 갱신 / index.html, spec.md, tasks.md, design.md, prompt.txt, work-log.md / 캔버스가 부모 너비의 중앙에 고정되도록 하고, 최대 5색 팔레트 안에서 해·동물 강도와 화면 직접 공격 방식을 일관되게 정의함.
2026-11-18 15:57 / 디자인 가이드 기반 시작 화면 개선 / js/scenes/StartScene.js, prompt.txt, work-log.md / 시작 화면에만 제한된 팔레트의 낮 풍경, 둥근 카툰 나무와 입체감 있는 큰 시작 버튼을 적용함.
2026-11-18 16:03 / 이미지 생성용 배경·캐릭터 프롬프트 작성 / image-prompts.md, prompt.txt, work-log.md / 세 맵의 관찰자 배경과 플레이어 캐릭터가 동일한 5색 카툰 스타일을 유지하도록 생성 조건을 구체화함.
2026-11-18 16:08 / 맵별 낮·밤 색상 프롬프트 조정 / image-prompts.md, prompt.txt, work-log.md / 숲과 고원은 낮·밤 변형을 분리하고 협곡은 시간대와 무관한 남색 중심 배경으로 정의함.
2026-11-18 16:10 / 캐릭터 프롬프트 색상 제한 / image-prompts.md, prompt.txt, work-log.md / 플레이어 캐릭터와 단색 배경에서 갈색·남색·녹색만 쓰도록 명시해 배경과 구분되는 제한된 색 체계를 적용함.
2026-11-18 16:38 / 게임 이미지 자산 목록 검토 / prompt.txt, work-log.md / 명세와 디자인을 기준으로 관찰자·1인칭 화면, 적, 자원, 전투 표현에 필요한 이미지와 코드로 처리할 요소를 구분함.
2026-11-18 16:56 / 게임용 이미지 자산 21종 생성 / assets/images/*.png, prompt.txt, work-log.md / 명세와 디자인 팔레트에 맞춰 관찰자·1인칭 배경 10종과 투명 캐릭터·자원·검·동물 스프라이트 11종을 생성하고 규격과 알파 채널을 검증함.
2026-11-18 17:03 / 게임 이미지 자산의 화면 적용 / js/assets/AssetCatalog.js, js/scenes/StartScene.js, js/scenes/GameScene.js, js/state/GameState.js, js/input/PlayerInput.js, prompt.txt, work-log.md / 자산 경로를 모듈화하고 시작·관찰자·방향 행동·전투·건축 화면에 이미지를 연결했으며 브라우저 검증이 중단되어 tasks.md 항목은 체크하지 않음.

2026-11-25T16:05:27+09:00 / spec.md 맨 아래에 '## 출시' 항목 추가 / spec.md / 요청한 네 항목(GitHub Pages, 원스토어 SDK 기본 연동, 일반 브라우저 플레이, 광고·결제 미포함)만 최소한으로 기재
