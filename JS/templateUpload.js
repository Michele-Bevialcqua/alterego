//feed fetching

const templates = [
    `/post templates/template-img-only.html`,
    `/post templates/template-text-only.html`,
    `/post templates/template-text-and-img.html`
];

function loadRandomTemplate() {

    const randomIndex = Math.floor(Math.random() * templates.length);
    const templatePath = templates[randomIndex];
    fetch(templatePath)
    .then(response => response.text())
    .then(data => {

        document.getElementById('feed').insertAdjacentHTML('beforeend', data);
    })
    .catch(error => console.error('Error loading the post:', error));
}


window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        loadRandomTemplate();
    }
});


