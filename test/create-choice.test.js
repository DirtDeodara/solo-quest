import createChoice from '../src/quest/create-choice.js';
import api from '../src/services/api.js';
const test = QUnit.test;

QUnit.module('api');
api.storage = sessionStorage;
QUnit.testStart(() => {
    sessionStorage.clear();
});

test('take a quest choice object and return the created DOM for that choice', (assert) => {
    //arrange
    const choice = {
        id: 'aroundBack',
        description: `You decide to just do as your told and carry everything, load by heavy load, around back.`,
    };

    //act
    const expected = `<label>You decide to just do as your told and carry everything, load by heavy load, around back.<input type="radio" name="path" required="" value="aroundBack"></label>`;
    const dom = createChoice(choice);
    //assert
    assert.deepEqual(dom.outerHTML, expected);
});