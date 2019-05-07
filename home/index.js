import makeUser from './make-user.js';
//import api here

const userSignUp = document.getElementById('user-sign-up');

userSignUp.addEventListener('Click', function(event){
    event.preventDefault();

    const formData = new formData(userSignUp);
    const user = makeUser(formData);
    api.signUp(user)

    window.location = 'map.html';
});