function add(a: number, b : number) : number { // 매개변수 a: 숫자, b : 숫자 , :number 반환값 .. 까지 지정 할 수 있다.
    return a+b;
}

const result = add(10, 20); // ==> 30이 출력 된다.
// add의 반환값이 number로 지정 되어 있음 그래서 result가 number로 지정.. ==> number의 속성을 자동완성으로 사용할 수 있다.


/**
 * 에러의 사전방지
 * 코드 가이드 및 자동 완성 ( 개발 생상선 향상 )
 * */