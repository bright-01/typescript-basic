function logText(text){
    console.log();
    return text;
}

logText(10); // 숫자 10
logText('하이'); // 문자열
logText(true); // 진위값

function logText2<T>(text:T):T{
    console.log();
    return text;
}

logText2<string>('10'); //  파라미터가 넘어 갈때 파라미터 인자의 타입과, 반환값을 결정

// 문제점
function logText3(text){
    console.log();
    return text;
}

function logNumber(number){
    console.log();
    return number;
}
// ==> 타입의 종류에 같은 로직 반복

//해결1. 유니온타입
function logText4(text:string|number){
    console.log();
    return text;
}
// => 문제점은 text 타입이 함수 내에서나 반환값에서 정확하게 타입이 지정되지 않는데 string |number 타입이라 api를 사용 할 수 없다.

// 해결2. 제네릭

function logText5<T>(text:T):T{ // logText5의 제네릭 타입이 어떤건지 정의 <T> / text:T 인자의 타입을 정의 / :T 반환 타입 정의
    console.log();
    return text;
}

const str = logText5<string>("t") // logText5의 타입은 string
const login = logText5<boolean>(true);
const test = logText5<number>(10);


// 인터페이스에 제네릭 선언하는 방법
interface Dropdown{
    value :string;
    selected: boolean;
}
const objA:Dropdown  = {value : 'abc', selected : false}

interface Dropdown2<T>{
    value : T;
    selected : boolean;
}
const objB:Dropdown2<string>  = {value : 'abc', selected : false}
// const objC:Dropdown2<number>  = {value : 'abc', selected : false} // 제네릭 타입에 맞지 않아 에러



// 제네릭의 타입 제한
function logTextLength<T>(text:T):T{
    // console.log(text.length); // .length 에러 출력. 왜냐면 함수내에서는 제네릭 타입이 뭐가 들어올지 모르니까.
    return text;
}

logTextLength('hi');

function logTextLength2<T>(text:T[]):T[]{ // 이런식으로 타입의 제한을 둘 수 있지만
    console.log(text.length);
    text.forEach((t)=>{
        console.log(t);
    })
    return text;
}
logTextLength2(['hi', 'hello']); // 원하는 인자는 아니네..

// 제네릭 타입 제한 2
interface LengthType {
    length: number;
}

function logTextLength3<T extends LengthType>(text:T):T{
    text.length;
    return text;
}

logTextLength3('a'); // 문자열은 length가 제공되니까 돌아감
// logTextLength3(10); // 이건 안돌아가지
logTextLength3({length: 10}); // 이렇게 타입을 정의해서 넘기면 돌아간다.


// 제네릭 타입 제한 3 - keyof
interface ShoppingItem{
    name : string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption:T):T{ // ShoppingItem 타입중에 한가지가 제네릭 타입으로 들어올수 있음.
    console.log(itemOption);
    return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption("stock");