// 타입 단언 ( type assertion )
let a;
a = 10;
a ='a';
let b = a as string; // b의 타입은 string인 것을 알고 있기 때문에 개발자가 타입을 정한다 as string;

// DOM API 조작
let div = document.querySelector('div') as HTMLDivElement; // div가 있는지 보장을 할 수 없기 때문에.. 아래 처럼 HTMLDivElement | null 로 들어가는데 타입 단원으로 선언하면 HTMLDivElement 로 타입이 단언됌
if(div){
    div.innerText
}


