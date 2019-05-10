import api from './api.js';

function loadProfile() {
//reference needed DOM elements
const name = document.getElementById('name');
const role = document.getElementById('role');
const skill = document.getElementById('skill');
const hunger = document.getElementById('hunger');
const fatigue = document.getElementById('fatigue');
const avatar = document.getElementById('avatar');

//initialize profile with user
const user = api.getUser();
console.log(user.role);

//no user? dang, well, go back to sign up
if(!user) {
    window.location = './';
}

//populate the profile
name.textContent = user.name;
role.textContent = user.role;
skill.textContent = user.skill;
hunger.textContent = user.hunger;
fatigue.textContent = user.fatigue;
avatar.src = '../../assets/' + user.role + 'Small.png';
}

export default loadProfile;