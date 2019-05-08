function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        role: formData.get('role'),
        skill: formData.get('skill'),
        hunger: 5,
        fatigue: 5
    };
    return user;
}
export default makeUser;
