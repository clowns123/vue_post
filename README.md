# vue_post

# 1. vue cli 3으로 시작하기

1. vue cli를 다운
   `npm i -g @vue/cli`

2. vue create로 뷰 프로젝트 구성
   `vue create "프로젝트 명"`

3. vscode 확장으로 eslint와 prittier를 설치 후

   `npm i eslint-config-prettier eslint-plugin-prettier --save-dev`을 통해 통합을 해준다.

> **eslint prettier을 사용하는 이유**
>
> 자바스크립트는 인터프리터언어이기 때문에 문법에러만 검출하고 실행을 한다. 실행을 하면서 오류가 나야 해당 위치에서 프로그램이 멈춰버립니다. 그렇기 때문에 이러한 프로그램이 멈춰버리는 문제를 예방하기 위해 eslint를 사용한다.
>
> prettier의 경우는 코드 스타일을 통일하기 위해 사용합니다. 다른 사람과 협업을 할 때 코딩 스타일이 달라지면 알아보기 힘들어지는 경우가 많기 때문에 개발 전 해당 코딩 스타일을 적용 후 prettier에 적용시키면 신경쓰면서 스타일을 맞출 필요 없이 개발이 가능합니다.



# 2. 프로젝트 시작

# 2.1 vue-router

`npm i vue-router --save`

router은 `src/router`이라는 폴더에서 관리하자