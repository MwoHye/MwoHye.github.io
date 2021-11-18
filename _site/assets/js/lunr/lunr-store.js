var store = [{
        "title": "[SQLD/개정] 요약 정리(1/4) - 1과목, 데이터 모델링의 이해 및 데이터 모델과 성능",
        "excerpt":"  제 1절. 데이터모델의 이해 1. 모델링의 이해 모델링 : “다양한 현상을 표기법에 의해 표기하는 것” 특징 3가지 : 추상화, 단순화, 명확화 관점 3가지 : 데이터 관점, 프로세스 관점, 상관 관점 2. 데이터모델의 기본개념이해 데이터모델링 : “정보시스템을 구축하기 위한 데이터관점의 업무분석기법” 데이터모델이 제공하는 기능 시스템 가시화, 시스템 구조와 행동 명세화,...","categories": ["SQLD"],
        "tags": ["SQL","SQLD","자격증"],
        "url": "/sqld/SQLD-1/",
        "teaser": null
      },{
        "title": "[SQLD/개정] 요약 정리(2/4) - 2과목 1장, SQL 기본",
        "excerpt":"  제 1절. 관계형 데이터베이스 개요 데이터베이스 “특정 기업이나 조직 또는 개인이 필요에 의해 데이터를 일정한 형태로 저장한 것” SQL “관계형데이터베이스에서 데이터 정의 데이터 조작, 데이터 제어를 하기 위해 사용하는 언어” 1. 데이터 조작어 (DML) : SELECT, INSERT, DELETE, UPDATE, MERGE DB 내 데이터에 대한 조회, 검색, 변형을 위한 명령어...","categories": ["SQLD"],
        "tags": ["SQL","SQLD","자격증"],
        "url": "/sqld/SQLD-2/",
        "teaser": null
      },{
        "title": "[SQLD/개정] 요약 정리(3/4) - 2과목 2장, SQL 활용",
        "excerpt":"  제 1절. 표준 조인 STANDARD SQL 일반 집합 연산자 UNION -&gt; UNION INTERSECTION -&gt; INTERSECT DIFFERENCE -&gt; EXCEPT PRODUCT -&gt; CROSS JOIN (CARTESIAN PRODUCT) 순수관계연산자 SELECT -&gt; WHERE (행 선택) PROJECT -&gt; SELECT (열 선택) (NATURAL) JOIN -&gt; 다양한 JOIN DIVIDE -&gt; 사용 X 제 2절. 집합 연산자 제...","categories": ["SQLD"],
        "tags": ["SQL","SQLD","자격증"],
        "url": "/sqld/SQLD-3/",
        "teaser": null
      },{
        "title": "[SQLD/개정] 요약 정리(4/4) - 2과목 3장, SQL 최적화 기본 원리",
        "excerpt":"   제 1절. 옵티마이저와 실행계획   제 2절. 인덱스 기본   제 3절. 조인 수행 원리  ","categories": ["SQLD"],
        "tags": ["SQL","SQLD","자격증"],
        "url": "/sqld/SQLD-4/",
        "teaser": null
      },{
        "title": "[SQLD/개정] FOREIGN KEY에 의한 명령어 정리 (CASCADE, SET NULL)",
        "excerpt":"FOREIGN KEY에 의한 ACTIONS ON DELETE 부모 테이블의 행이 삭제될 때 자식 테이블에 일어나는 일들 CASDADE : 부모 삭제 시 자식도 삭제 SET NULL : 부모 삭제 시 자식은 NULL로 설정 SET DEFAULT : 부모 삭제 시 자식은 기본값 설정 RESTRICT : 자식이 없는 경우만 부모 삭제 ON INSERT 자식...","categories": ["SQLD"],
        "tags": ["SQL","SQLD","자격증"],
        "url": "/sqld/SQLD-5/",
        "teaser": null
      },{
        "title": "[SQLD/개정] 최종 정리 노트 - 김강민SQLD (1/2)",
        "excerpt":"해당 내용은 김강민 SQLD ‘SQLD 최종 정리강의 1편’과 관련된 내용입니다. 관련 영상 링크 : https://www.youtube.com/watch?v=PC3ypt_VGWI&amp;t 1. SQL 명령문 개괄 ★ SQL 연산 순서 SELECT – 5 FROM – 1 WHERE – 2 GROUP BY – 3 HAVING – 4 ORDER BY – 6 DML / DDL / DCL / TCL...","categories": ["SQLD"],
        "tags": ["SQL","SQLD","자격증"],
        "url": "/sqld/SQLD-91/",
        "teaser": null
      },{
        "title": "[SQLD/개정] 최종 정리 노트 - 김강민SQLD (2/2)",
        "excerpt":"해당 내용은 김강민 SQLD ‘SQLD 최종 정리강의 2편’과 관련된 내용입니다. 관련 영상 링크 : https://www.youtube.com/watch?v=PjCSvexo3Ow 19. 윈도우 함수 ★★★ ROWS, RANGE 결과 값 차이점 순위함수 RANK : 동일 점수, 중복 건너뜀 (1등, 2등, 2등, 4등) DENSE_RANK : 동일 점수, 중복 건너뛰지 X (1등, 2등, 2등, 3등) ROW_NUMBER : 고유 점수...","categories": ["SQLD"],
        "tags": ["SQL","SQLD","자격증"],
        "url": "/sqld/SQLD-92/",
        "teaser": null
      },{
        "title": "[SQLD/개정] 오답노트 과목 1 - 데이터의 이해",
        "excerpt":"  1장. 데이터 모델링의 이해   2장. 데이터 모델과 성능 성능 데이터 모델링 순서 정규화 → 용량산정 → 트렌젝션 파악 → 반정규화 → PK/FK등 조정 → 검증 1차, 2차, 3차 데이터 정규화 1차 정규화 : 1) 같은 성격과 내용의 컬럼이 연속적으로 나오는 경우 2) 속성 하나에 2개 이상 속성값이 있는...","categories": ["SQLD"],
        "tags": ["SQL","SQLD","자격증"],
        "url": "/sqld/SQLD-98/",
        "teaser": null
      },{
        "title": "[SQLD/개정] 오답노트 과목 2 - SQL 기본 및 활용",
        "excerpt":"  1장. SQL 기본 비절차적 &amp; 절차적 데이터 조작어 (DML) 비절차적 데이터 조작어 : 무슨 데이터 원하는지 명세 절차적 데이터 조작어 : 무슨 데이터 원하는지 + 어떻게 접근해야 하는지 DELETE &amp; TRUNCATE &amp; DROP DELETE : DML, 데이터만 삭제, 로그 O, 원하는 데이터만 지울 수 있음, ROLLBACK 가능 TRUNCATE :...","categories": ["SQLD"],
        "tags": ["SQL","SQLD","자격증"],
        "url": "/sqld/SQLD-99/",
        "teaser": null
      }]
