---
title: Next.js, Hydrate란?
date: '2022-08-17'
summary: Google web dev, Animation 파트를 보고 간략히 정리를 해보았습니다.
publish: true
---

# 🫙 Pre-rendering

## Next.js

<Image src={'/posts/2022/08/nextjs-hydrate/pre-rendering.png'} alt="pre-rendering" size="medium"/>

## React

<Image src={'/posts/2022/08/nextjs-hydrate/non-pre-rendering.png'} alt="non-pre-rendering" size="medium"/>

**Next.js**는 `Pre-rendering`이라는 특징을 갖고있습니다.

`Pre-rendering`는 사용자가 특정 페이지에 접근시, **Server**에서 우선적으로 **HTML 파일**을 먼저 로드하여 화면을 보여주는 것을 의미합니다. 즉, 우리 페이지의 껍데기가 될 화면을 미리 보여주는 것 이죠.

이를 통해 기존 **React**에서는 구현하기 어려웠던 `SEO` & `TTV` 줄이기 등의 문제를 해결할 수 있습니다.

> **TTV (Time To View)**: 사용자가 웹 페이지의 UI를 볼 수 있는 시점

여기서 사용자는 **웹 페이지의 UI**들을 빠르게 볼 수 있지만, **버튼 클릭, 링크 클릭등의 이벤트**를 발생시키지 못합니다. 단순 **HTML 파일**에는 **이벤트 요소**들이 붙어있지 않기 때문이죠. 😏

**그렇다면**, 사용자의 인터렉션을 위해 **JavaScript 주입**은 `Next.js`에서 언제 발생할까요?

여기서 `Hydrate`란 개념이 등장합니다. ✨

# 🌊 Hydrate

`Hydrate` 과정에서는 번들링된 **JavaScript** 파일을 로드하여 기존의 로드된 **HTML DOM 요소** 위에 매칭을 시킵니다.

**JavaScript**와 매칭된 요소들은 다시 `렌더링`되어 사용자는 클릭 이벤트 등의 **인터렉션**이 가능해집니다.

> `Hydrate` 뜻 그대로, **HTML** 뼈대에 **JavaScript 수분**을 보충해주는 과정의 의미로 저렇게 네이밍하지 않았나 싶습니다..🧐

<Image src={'/posts/2022/08/nextjs-hydrate/list.png'} alt="network" width="600" height="180"/>

**Network 탭**에서 확인했을 경우에도 HTML을 우선 가져오고 JavaScript 번들링 파일들을 가져오고 있네요.

## ReactDOM.hydrate()

`Hydrate`는 `Next.js`에만 존재하는 개념, 특징이 아닙니다.

사실, React 자체에서도 `render` 함수 대신 `hydrate` 함수를 제공하고 있습니다.

> **render**, **hydrate**는 **React 18** 에서 **createRoot**, **hydrateRoot**로 대체됩니다.

```typescript
ReactDOM.render(element, container[, callback])
```

**render** 함수는 `container DOM 요소`에 **element**를 렌더링합니다. 이미 렌더링된 **element**이면 업데이트를 진행합니다.

```typescript
ReactDOM.hydrate(element, container[, callback])
```

기존 `render`와 비슷하지만 **element** 렌더링 대신 `렌더링된 컨테이너의 이벤트 등록`을 진행합니다.

**CSR** 프로젝트를 진행하면서 `hydrate` 함수를 볼 기회가 많지 않지만, **React 18**로 메이저 업데이트가 되고 React에서도 **SSR** 대응을 위해 새로운 아키텍쳐들을 내놓는 모습을 보면서 추후 코드상에서 볼 기회가 많지 않을까 라는 생각이 듭니다. 😎

---

> 참고 | [React docs](https://ko.reactjs.org/docs/react-dom.html#hydrate), [Next.js docs](https://nextjs.org/docs/basic-features/pages#pre-rendering), [아티클](https://blog.saeloun.com/2021/12/16/hydration.html)
