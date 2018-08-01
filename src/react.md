# react 규칙 (js표준)
- 세미콜론을 사용하지 않는다.
    ```
    function sayHello(name) {
        console.log(name)
        window.alert("hello, " + name +  "!)
    }
    ```
- 들여쓰기는 공백2개
- 함수 이름 뒤에 공백
    ```
    // 함수를 정의할 때는 이름 뒤에 공백을 넣습니다. 
    function gobsem (a, b) {
        return a * b
    }
    // 함수를 호출할 때는 이름 뒤에 공백을 넣지 않습니다. 
    gobsem(2, 3)

    ```
- 비교 연산자 "=="는 사용하지 않고, "==="만 사용
    - "==" 숫자와 문자열을 비교할 때는 문자열이 숫자로 변환 될 수 있다면 
      "05" == 5 true 출력
      "1" === 1 false
      null, undefined obj == null 사용해도 괜찮다. 
---

