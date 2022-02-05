interface Developer {
    name : string;
    skill: string;
}

interface Person {
    name:string;
    age:number;
}

function introduce():Developer | Person {
    return {name: 'Tony', age: 33, skill: 'IronMaking'}
}

let tony = introduce();
// console.log(tony.skill) // skill이 있어도 접근 할 수 없다.. 왜냐하면 유니온 타입은 공통된 속성만 접근을 할 수 있으니까
console.log(tony.name)
if((tony as Developer).skill) {
    let skill = (tony as Developer).skill;
    console.log(skill);
} else if ((tony as Person).age){
    let age = (tony as Person).age;
    console.log(age);
}

 // 위와 같이 타입 단원으로 코드를 짜기엔 너무 복잡하다
// 타입가드 적용
// 타입가드 정의
function isDeveloper(target: Developer | Person): target is Developer{
    return (target as Developer).skill !== undefined;
}

if(isDeveloper(tony)){
    tony.skill
}else {
    tony.age
}
