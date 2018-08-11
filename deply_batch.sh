#!/usr/bin/env bash

echo "hello world"
printf "hello world"
printf "%s %s" hello world

string_test() {
    echo "string test"
}

# 함수 만들기 function 생략 가능
function string_test() {
    echo "string test2"
    echo "인자값:${@}"
}

# 함수 호출 
string_test
string_test2

# 함수 인자값 전달 
string_test2 "hello" "world"

# 전역변수 지정
string="hello world"
echo ${string}

#지역변수 테스트 함수
string_test() {
    local string="local"
    echo ${string}
}
#지역변수 테스트 함수 호출
string_test
#지역변수 테스트 함수에서 동일한 변수명을 사용했지만 값이 변경되지 않음
echo ${string}

#환경변수 선언
export hello_world="hello world..."
#자식 스크립트 호출은 스크립트 경로를 쓰면 된다. 
/home/export_test.sh

#환경변수를 테스트하기 위해 export_test.sh 파일을 만들고 선언한 변수를 확인해 본다. 
echo ${hello_world} @@@@

# 이것도 겹치나 보자 .

