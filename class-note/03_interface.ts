interface User {
    age: number;
    name: string;
}

// 변수에 활용한 인터페이스
let seho: User = {
    age : 33,
    name :'세호'
};

//함수에 인터페이스 활용
function getUser(user: User){
    console.log(user);
}

const capt = {
    name: '캡틴',
    age : 100
}

getUser(capt);


// 함수의 스펙에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number) : number;
}

let sum: SumFunction;
sum = function(a:number, b:number): number{
    return a+b;
}

//인덱싱
interface StringArray {
    [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
arr[0] = 'f';

// 인터페이스 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp
}

let obj:StringRegexDictionary = {
    // sth: /abc/,
    cssFile : /\.css$/,
    jsFile : /\.js$/,
}
// obj['cssFile'] = 'abc'; // 이건 에러가 남.
 Object.keys(obj).forEach(function(value){
     // 이렇게 for문을 돌릴때 안에 들어오는 값들은 모두 스트링으로 정의 되어 있기 때문에 작업하기 용이함.
     // 객체의 값을 추론하기 쉬움
 })


//인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person{
    language: string;
}

let mwcheon: Developer = {
   name: 'cheon',
   age: 33,
   language : 'kor'
}

