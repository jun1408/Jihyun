2026-11-11 16:08:33+09:00 / 11주차 게임기획안 양식에 맞춰 spec.md 작성 / spec.md, prompt.txt, work-log.md / 양식 원안의 산 생존·동물 전투·능력치 성장과 사용자가 선택한 블록 단위 건축을 기준으로 범위를 정함.
2026-11-11 16:11 / MVP 구현 작업 목록 재작성 / tasks.md, prompt.txt, work-log.md / 명세의 MVP만을 작은 검증·커밋 단위로 나누고 각 항목에 Live Server 확인 기준을 명시함.
2026-11-11 16:18 / 시작·플레이·결과 장면 분리 및 재시작 흐름 구현 / index.html, js/main.js, js/scenes/StartScene.js, js/scenes/GameScene.js, js/scenes/ResultScene.js, tasks.md, prompt.txt, work-log.md / 결과 데이터는 플레이 장면에서 결과 장면으로 전달하고 다시 하기는 동일 스테이지를 새로 시작하도록 구성함.
2026-11-11 16:21 / 기본 모듈 구조 분리 / js/state/GameState.js, js/input/PlayerInput.js, js/combat/CombatSystem.js, js/building/BuildingSystem.js, js/scenes/GameScene.js, tasks.md, prompt.txt, work-log.md / 기존 장면 전환을 유지하면서 입력·상태·전투·건축의 책임 경계를 별도 모듈로 마련함.
2026-11-11 16:35 / 모바일 2D 생존 게임 명세와 작업 목록 갱신 / spec.md, tasks.md, prompt.txt, work-log.md / 관찰자 시점과 1인칭 2D 행동 화면 전환을 중심으로 자원·전투·방향별 벽 건축 흐름을 재정의함.
2026-11-11 16:39 / 세 맵과 30일 건축 해금 조건 반영 / spec.md, tasks.md, prompt.txt, work-log.md / 맵별 생존 후 건축하는 진행 구조를 세 개의 가상 지역과 순차 완료 조건으로 구체화함.
