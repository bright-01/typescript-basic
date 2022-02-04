function logMessage(value: any) {
    console.log(value);
}

logMessage('hello');
logMessage(100);


// union type 적용 | 타입을 이용해 타입을 여러개 연결하는 방식.
let seho : string | number | boolean;
function logMessage2(value:string | number ){
    if(typeof value === 'number'){
        value.toString();
    }
    if(typeof value === 'string'){
        value.toString()
    }
    throw new TypeError('value must be string or number');
    console.log(value);
}

logMessage2('hello');
logMessage2(100)


interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person){ // 위에서 정의한 인터페이스 2개를 유니온 타입으로 정의
    // 그렇다면 Developer와 Person의 속성을 모두 뱉어줄거라고 추론할 수 있는데..
    //실제로는 name이라는 공통 속성만 접근이 가능하다
    someone.name;
    // someone.skill; // 접근 X
    // someone.age; // 접근 X

    // ==> 이유는 함수에 developer와 Person중 어떤것이 들어올지 모르기 때문에 확실하게 추론할 수 있는 공통 속성만 접근 할 수 있도록 함.

}

askSomeone({name: 'cheon', skill: 'javascript'});
askSomeone({name: 'cheon', age: 2});

// 인터셉션 적용하기 &
function askSomeone2(someone: Developer & Person){  // 정의된 모든 속성을 포함한다.
    someone.name;
    someone.skill; // 접근 O
    someone.age; // 접근 O
}
askSomeone2({name: 'cheon', skill:'javascript', age: 2});





