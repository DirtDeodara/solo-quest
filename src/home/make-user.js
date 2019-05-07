function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        role: formData.get('role'),
        hunger: 5,
        cash: 10
    };
    return user;
    console.log('blah');
}
export default makeUser;