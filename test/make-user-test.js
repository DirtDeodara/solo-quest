import makeUser from '../home/make-user.js';
const test = QUnit.test;

QUnit.module('make user');

test('create user object from form data', (assert) => {
    //arrange
    const formData = new FormData();
    formData.set('name', 'gorgor');
    formData.set('role', 'punk');

    const expected = {
        name: 'gorgor',
        role: 'punk',
        hunger: 5,
        cash: 10
    }
    //act
    const user = makeUser(formData);

    //assert
    assert.deepEqual(user, expected);
});