function createQuestLink(quest) {
    const link =document.createElement('a');
    link.classList.add('load-in-link');

    const image = document.createElement('img');
    image.setAttribute('src', './assets/van.png');

    link.appendChild(image);

    const searchParams = new URLSearchParams();
    searchParams.set('id', quest.id);
    link.href = 'quest.html?' + searchParams.toString();

    return link;
}

export default createQuestLink;