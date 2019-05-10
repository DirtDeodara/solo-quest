import makeUser from './make-user.js';
import api from '../services/api.js';

const userSignUp = document.getElementById('user-sign-up');
const submitIcon = document.getElementById('submit-icon');

submitIcon.addEventListener('click', function(event){
    event.preventDefault();

    const formData = new FormData(userSignUp);
    const user = makeUser(formData);
    api.saveUser(user);

    window.location = 'map.html';
});