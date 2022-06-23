---
title: 프로그래머스 | 자바스크립트(JavaScript) - 숫자 문자열과 영단어 (문자열) (카카오 기출)
date: '2022-05-02'
tags: ['javascript', 'algorithm']
summary: 프로그래머스 카카오 기출 문제
publish: true
---

# 문제 설명 📝

네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

```
1478 → "one4seveneight"
234567 → "23four5six7"
10203 → "1zerotwozero3"
```

이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

# 문제 풀이 ✍

**프로도 표정보면 네오 혼자 재밌는 숫자 놀이를 하고 있습니다.**

문제는 **`replace`** 함수와 **`정규식`** 을 이용하면 간단하게 해결이 가능합니다.

> replaceAll 은 최신 문법이기 때문에 프로그래머스에 존재하지 않습니다.

따라서 **RegExp** 를 통해 **replaceAl**l 을 대체 합니다.

```
new RegExp(교체할 문자 변수, 'g');
```

---

```javascript
function solution(s) {
  const numberList = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  numberList.forEach((number, index) => {
    let regex = new RegExp(number, 'g');
    s = s.replace(regex, index);
  });

  return Number(s);
}
```
