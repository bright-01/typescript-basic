
//타입 추론1
let a = 10;

function getB(b = 10){
    let c = 'hi';
    return b+c;
}

// 10+'10'//1010


//타입 추론2
interface Dropdown<T>{
    value: T;
    title: string;
}

let shoppingItem: Dropdown<string> = {
    value: 'abc',
    title: 'hello'
}


// 타입추론 3
interface Dropdown2<T>{
    value: T;
    title: string;
}

interface DetailDropdown<K> extends Dropdown2<K>{
    description: string;
    tag: K;
}

let detailItem: DetailDropdown<string> = {
    title: 'abc',
    description: 'ab',
    value: '123',
    tag:'ff'
}

// Best Common Type
let arr = [1,2,true, "as"];
