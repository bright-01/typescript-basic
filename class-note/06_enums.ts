enum Shoes {
    // 기본적으로 초기화를 하지 않으면 숫자로 값이 들어간다
    Nike = '나이키',
    Adidas = '아디다스'

}

let myShoes = Shoes.Nike;
console.log(myShoes); // 0 이 출력 초기화 하면 -> 나이키 출력


function askQuestion(answer: string){
    if ( answer === 'yes') {
        console.log('정답');
    }

    if ( answer === 'no') {
        console.log('정답');
    }
}

askQuestion('yes')
askQuestion('no')
askQuestion('hi')
// 이렇게 정의하면 string 타입의 모든 값이 인자로 들어가게 된다. enum으로 값을 정의 하면
enum Answer {
    YES = "yes",
    NO = "no"
}

function askQuestion2(answer: Answer){
    if ( answer === Answer.YES) {
        console.log('정답');
    }

    if ( answer === Answer.NO) {
        console.log('정답');
    }
}

// askQuestion2('yes')
askQuestion2(Answer.YES); // 이렇게 정의 할 수 있다.