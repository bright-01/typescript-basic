// js 문자열 선언
let str = 'hello';

// ts 문자열 선언
let str2: string = 'hello';

//ts 숫자
let num: number = 2;

//ts 배열
let arr1:Array<number> = [1,2,3,4];
let arr1_1:number[] = [1,2,3,4]; // 위랑 동일
let arr2:Array<String> = ['Capt', 'Thor', 'Hulk']; // 10을 넣으면 에러

// ts 튜플
let address: [string, number] = ['cudo', 10]; // 튜플은 특정인덱스, 특정 순서에 어떤 타입이 들어갈지도 정의 할 수 있다.

//ts 객체
let obj: object = {};
let person1 : object = {
    name : 'capt',
    age: 100
};
let person2 : { name: string, age: number } = {
    name : 'mwcheon',
    age : 999
}

// ts 진위값
let show: boolean = true;

// ts enum
enum Avengers { Capt, IronMan, Thor};
let hero1: Avengers = Avengers.Capt;
let hero2: Avengers = Avengers.Capt[2];

// ts any 어떤 타입도 허용
let str3: any = 'hi';
let num3: any = 10;
let arr3: any=[1,'10', 'string'];

// ts void ==> 변수에는 undefined와 null만 할당하고 함수에는 반환값을 설정할 수 없는 타입
let unuseful: void = undefined;
function notUse(): void {
    console.log('no return');
}

// ts never ==> 함수의 끝에 절대 도달하지 않는다
function neverEnd(): never {
    while(true){
        
    }
}
