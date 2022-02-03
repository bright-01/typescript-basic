// 함수의 파라미터에 타입을 정의하는 방식
function sum1(a: number, b:number)  {
    return a+b;
}
sum1(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function sum2(): number {
    return 10;
}

// 함수 타입 정의 종합
function num3 (a:number , b:number): number {
    return a+b;
}

// 함수의 인자
function add (a, b){
    return a+b;
}
// add(10, 20, 30, 40) // 자바스크립트의 장점 중 하나 인자의 유연함 3,4번째 파라미터를 넘겨도 동작함.
// num3(10, 20, 30, 40) // 타입스크립트는 불가능 정의된 함수의 인자만큼만 넘겨야한다.

//함수의 옵셔널 파라미터 ==> 인자의 수를 제한 하지 않고 필요에 따라 원하는 만큼만 넘기고 싶다고 할때는 ?를 사용한다.
function log(a: string, b?: string, c?:string){

}
log('hello');
log('hello', "test!!");
log('hello', "test!!", '10');
