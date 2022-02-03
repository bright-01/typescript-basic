// function sum(a,b) {
//     return a+b;
// }
// sum(10, '20'); // ==> 1020 으로 출력
//


// @ts-check
/**
 * @param { number } a
 * @param { number } b
 * */

function sum(a, b){
    return a + b;
}

add(10, '20'); // js파일에서는 에러를 잡지 못하는데 @ts-check를 넣게 되면 ts와 같은 효과를 볼 수 있다. .. .. webstrom에서는 안되는건가..