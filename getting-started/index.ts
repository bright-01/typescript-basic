function sum(a: number, b:number): number{
    return a+b;
}

sum(10, 20);

// ts파일을 js파일로 변환하는 작업이 필요하다 ==> 컴파일 필요
// 하는 방법 : terminal을 열고 tsc index.ts를 하면 같은 폴더 레벨에 index.js파일이 생성