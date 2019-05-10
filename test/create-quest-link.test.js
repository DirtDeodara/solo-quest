import createQuestlink from '../src/map/create-quest-link.js';
const test = QUnit.test;

QUnit.module('create test link');

test('create correct html', (assert) => {
    //arrange
    const quest = {
        id: 'loadIn',
        title: 'Load In',
        image: 'van.png'
    };
    const expected = '<a class="load-in-link" href="quest.html?id=loadIn"><img src="./assets/van.png"></a>';
    
    //act
    const dom = createQuestlink(quest);

    //assert
    assert.equal(dom.outerHTML, expected);
});