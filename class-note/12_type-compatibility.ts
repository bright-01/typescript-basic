//인터페이스
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
}

let developer: Developer;
let person : Person;
// developer = person; // 작은 타입을 큰 타입으로 지정 할 수 없다.
// 구조적 타입은 타입보다 그 안에 속성을 보고 판단함.
person = developer;

// 함수
let add = function (a: number){
    return a;
    //...
}

let sum = function (a:number, b:number){
    return a+b;
}

// add = sum; // 이건 안된다.. sum이 더 크거든.. 파라미터를 받을 수 있는 구조도 아니잖아.
sum = add

// 제네릭
interface Empty<T>{
    //
}
let empty1: Empty<string>;
let empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;


interface NotEmpty<T> {
 data : T
}

let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;
// notempty1 = notempty2;
// notempty2 = notempty1;




