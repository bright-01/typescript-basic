//
// interface Person {
//     name :string,
//     age: number
// }

type Person = {
    name :string,
    age: number
}

let seho : Person = {
    name :'세호',
    age: 10,
}

type MyString = string;
let str : MyString = 'hi';

type Todo = {id:string; title:string; done:boolean};
function getTodo(todo: Todo){

}