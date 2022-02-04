// es2015(ES6)
class Person {
    constructor(name, age) {
        console.log('생성 되었습니다.');
        this.name = name;
        this.age = age;
    }
}

let testPerson = new Person('세호', 11); // 생성되었습니다.
console.log(testPerson);


// 아래와 같은 문법
function Person1(name, age){
    this.name = name;
    this.age = age;
}

let person1 = new Person('choen', 11);