class Person{
    // 접근 범위까지 정할 수 있다.
    private name: string;
    public age: number;
    readonly log: string;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
}