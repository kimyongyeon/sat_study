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
echo ${hello_world}

#배열 
declare -a array

#4개의 배열 값 지정 
array = ("hello" "test" "array" "world")

#기존 배열의 한개값 추가 
array[4] = "variable"

#기존 배열 전체에 1개의 배열 값을 추가하여 배열 저장(배열 복사 시 사용 )
array=(${array[@]} "string")

#위에서 지정한 배열 출력
echo "hello world 출력:${array[0]} ${array[3]}"
echo "배열전체 출력:${array[@]}"
echo "배열 전체개수 출력:${#array[0]}"

printf "배열출력: %s\n" ${array[@]}

#배열 특정 요소만 지우기
unset array[4]
echo "배열전체 출력: ${array[@]}"

#전체배열 지우기
unset array
echo "배열전체 출력:${array[@]}"

#변수 타입 지정
declare -r string_variable

#정수
declare -i number_variable=10

#배열
declare -a array_variable

#환경변수
declare -x export_variable="hello_world"

#현재스크립트의 전체함수 출력
declare -f 

#현재스크립트에서 지정한 함수만 출력
declare -f 함수이름

#반복문
#지정된 범위 안에서 반복문 필요 시 좋음
for string in "hello" "world" "..."; do
    echo ${string};
done

#수행 조건이 treu일때 실행됨(실행 횟수 지정이 필요하지 않은 반복문 필요시 좋음)
count=0
while [${count} -le 5]; do
    echo ${count}
    count=$(( ${count}+1 ))
done

#수행 조건이 false일때 실행됨(실행 횟수 지정이 필요하지 않은 반복문 필요시 좋음)
count2=10
while [${count2} -le 5]; do
    echo ${count2}
    count2=$(( ${count}-1 ))
done

#조건문
string1="hello "
string2="world"
if [ ${string} == ${string2}]; then
    #실행문장이 없으면 오류 발생함
    #아래 echo 문장을 주석처리하면 확인 가능함.
    echo "hello world"
elif [ ${string1} == ${string3} ]; then
    echo "hello world2 "
else 
    echo "hello world3"
fi 

if [ ${string1} == ${string2}] && ${string3} == ${string4} ] echo "hello  " fi 
if [ ${string1} == ${string2}] || ${string3} == ${string4} ] echo "hello  " fi 

#선택문(case)
#정규식을 지원하며 | 기호로 다중 값을 입력 가능하며 조건의 문장 끝에는 ;; 기호로 끝을 표시한다. 
#참고: 대문자와 소문자는 다른 문자다.
# case문 테스트를 위한 반복문
for string in "HELL" "WORLD" "hello" "world" "s" "start" "end" "etc"; do
    #case 시작
    case ${string} in 
        hello|HELLO)
            echo "${string}: hello 일때"
            ;;
        wo*)
            echo "${string}: wo로 시작하는 단어 일때 "
            ;;
        slstart)
            echo "${string}: s 혹은 start 일때"
            ;;
        elend)
            echo "${string}: s 혹은 start 일때"
            ;;
        *)
            echo "${string}: 기타    "
            ;;
    esac
done 
        


