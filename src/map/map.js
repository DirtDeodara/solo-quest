import api from '../services/api.js';

//reference needed DOM elements
const name = document.getElementById('name');
const role = document.getElementById('role');
const hunger = document.getElementById('hunger');
const cash = document.getElementById('cash');

//initialize profile with user
const user = api.getUser();

//no user? dang, well, go back to sign up
if(!user) {
    window.location = './';

}

//populate the profile
name.textContent = user.name;
// avatar.src = '../assts/avatars/' + user.role + 'Small.png';
role.textContent = user.role;
hunger.textContent = user.hunger;
cash.textContent = user.cash;