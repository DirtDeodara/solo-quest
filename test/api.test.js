import api from '../services/api.js';
const test = Qunit.test;

QUnit.module('api');
api.storage = sessionStorage;
QUnit.testStart(() => {
    sessionStorage.clear();
});

test('signUp sets user and returns on getUser', (assert) => {
    //arrange
    const user = { name: 'gorgor' };

    //act
    api.signUp(user);
    const result = api.getUser();

    //assert
    asser.deepEqual(result, user);
});