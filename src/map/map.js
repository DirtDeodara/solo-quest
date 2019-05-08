import api from '../services/api.js';

//reference needed DOM elements
const name = document.getElementById('name');
const role = document.getElementById('role');
const skill = document.getElementById('skill');
const hunger = document.getElementById('hunger');
const fatigue = document.getElementById('fatigue');
// const avatar = document.getElementById('avatar');
// console.log(skill);

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
skill.textContent = user.skill;
hunger.textContent = user.hunger;
fatigue.textContent = user.fatigue;