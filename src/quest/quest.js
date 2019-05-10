import loadProfile from '../services/load-profile.js';
import createChoice from '../quest/create-choice.js';
import api from '../services/api.js';

loadProfile();

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const quest = api.getQuest(questId);
const resultDescription = document.getElementById('result-description');

if(!quest) {
    window.location = 'map.html';
}

const task = document.getElementById('task');
const description = document.getElementById('description');
const choices = document.getElementById('paths');
const result = document.getElementById('result');
const questPaths = document.getElementById('quest-paths');

task.textContent = quest.title;
description.textContent = quest.description;

for(let index = 0; index < quest.choices.length; index++) {
    const choice = quest.choices[index];
    const paths = createChoice(choice);
    choices.appendChild(paths);
}

questPaths.addEventListener('submit', function(event){
    event.preventDefault();
    //get use choice
    const formData = new FormData(questPaths);
    const choiceId = formData.get('path');
});
    

    // for(let i = 0; i < quest.choices.length; i++) {
    //     const choice = quest.choices[i];
    //     console.log(choiceId, 'this');
    //     if(choice.id === choiceId) {
    //         resultDescription.textContent = choice.result;
    //         const user = api.getUser();
    //         const updatedUser = scoreQuest(choice, user, quest);
    //         api.saveUser(updatedUser);
    //         loadProfile();
    //     }
    // }
