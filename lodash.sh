#!/bin/bash 
string_test() {
    echo "string test"
}
string_test

printf "%s %s" hello world

for string in "hello" "world" "..."; do
    echo ${string};
    if [ ${string} == "hello" ]; then
        echo "${string}: world true"

    fi
done
