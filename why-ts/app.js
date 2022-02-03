var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

function fetchUser(){
    return axios.get(url);
}

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 * */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 * */

/**
 * @return {Promise<User>}
 * */
function startApp() {
    fetchUser().then(function(response){
        const data = response.data;
        console.log(data);
        username.innerText = data.name;
        email.innerText = data.email;
        address.innerTexst = data.address.city;

    })

    // axios.get(url)
    //     .then(function (response) {
    //         console.log(response);
    //         user = response.data;
    //         TODO: 이름, 이메일, 주소 표시하기
        // console.log("user : ", user);
        //     username.innerText = user[0].name;
        //     email.innerText = user[0].email;
        //     address.innerText = user[0].address.street;
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
}

startApp();