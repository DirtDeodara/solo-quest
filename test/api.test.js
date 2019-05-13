import api from '../src/services/api.js';
import questData from '../src/services/quest-data.js';
const test = QUnit.test;

QUnit.module('api');
api.storage = sessionStorage;
QUnit.testStart(() => {
    sessionStorage.clear();
});

test('saveUser sets user and returns on getUser', (assert) => {
    //arrange
    const user = { name: 'gorgor' };

    //act
    api.saveUser(user);
    const result = api.getUser();

    //assert
    assert.deepEqual(result, user);
});

test('returns list of quests', (assert) => {
    //arrange
    const expected = questData;

    //act
    const quests = api.getQuests();

    //assert
    assert.deepEqual(quests, expected);
});

test('take an ID and return the corresponding quest', (assert) => {
    //arrange
    const expectedQuest = questData[1];

    //act
    const foundQuest = api.getQuest(expectedQuest.id);

    //assert
    assert.deepEqual(foundQuest, expectedQuest);
});