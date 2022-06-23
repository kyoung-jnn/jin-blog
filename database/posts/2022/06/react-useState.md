---
title: React, useState 내부 동작 방식과 클로저
date: '2022-06-03'
tags: ['react', 'hook']
summary: React의 useState 내부 동작 과정을 알아봅니다.
publish: true
---

# useState

React를 사용하다보면 **상태값 관리**를 위해 React에서 제공하는 `useState` Hook을 사용하곤 합니다.

항상 간편히 **useState**을 사용해오다 내부 동작 과정을 모르는 경우가 많습니다. 😖

이번 포스팅에서는 그동안 가볍게 넘어갔던 **useState**의 내부 코드를 살펴봅니다.

## useState 내부 구현 코드

```js
// node_modules/react/cjs/react.development.js

function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
```

우리가 사용했던 `useState`는 위와 같이 정의 되어있습니다.

선언된 **dispatcher**에서 **useState**를 반환합니다.<br/>
초기 값을 넘겨주면 해당 값을 인자로 받고 있네요.
해당 반환 값은 우리가 알고있는 **배열**이겠네요!!

> **[상태, 상태 변경 함수]**

**dispatcher**를 반환하는 `resolveDispatcher` 살펴봅시다.

```js
var ReactCurrentDispatcher = {
  current: null,
};

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;
  return dispatcher;
}
```

`resolveDispatcher`에서는 다시 `ReactCurrentDispatcher`라는 객체의 프로퍼티를 반환하고 있습니다.

여기서 중요한 점은 `ReactCurrentDispatcher` 라는 객체입니다.
해당 변수는 **전역**으로 설정되어 있습니다❗️

<p align="center"> 
![obj](/posts/2022/06/react-useState/obj.png)
</p>

> 런타임 환경에서 ReactCurrentDispatcher 객체 구성

위 이미지에서 확인해보면 비단 `useState` 뿐만 아니라 다양한 **Hook**들도 해당 객체를 통해 접근한다는 것을 확인할 수 있습니다.

**결국**, `useState`의 결과 값은 전역에 존재하는 값 **(ReactCurrentDispatcher.current)** 에서 온다는 것을 이해합시다. ✨
<br/>

# 클로저

해당 객체의 접근을 위해 **JavaScript**의 `클로저`가 사용됩니다. <br/>
클로저는 아래와 같은 **한 문장으로 간략히 정의**됩니다.

> 함수가 자신의 렉시컬 스코프를 기억해 렉시컬 스코프 밖에서 호출되어도 해당 스코프에 접근이 가능하다.

**Hook**을 사용할 수 있는 **함수형 컴포넌트**도 하나의 함수입니다.

따라서, `useState`을 사용하면 해당 함수(컴포넌트) 스코프를 벗어나 <br/>
**다른 스코프에서 관리하고 있는 state (ReactCurrentDispatcher)** 에 접근이 가능해지고 <br/>
해당 **state**는 결국 컴포넌트에서 상태 값으로 이용되는 방식입니다. 😎

<br/>
