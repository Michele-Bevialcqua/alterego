let{
    languageBtn = document.getElementById('langButton'),
    languageDropdown = document.getElementById('langDropdownContent'),
    genderBtn = document.getElementById('genderBtn'),
    genderDropdown = document.getElementById('genderDropdownContent'),
}={};

languageBtn.addEventListener('mouseover', () => {
    languageDropdown.style.opacity = 1;
    languageDropdown.style.trasition = '1s';
});

languageDropdown.addEventListener('mouseleave', () => {
    languageDropdown.style.opacity = 0;
    languageDropdown.style.trasition = '1s';
});

languageBtn.addEventListener('mouseleave', (event) => {
    if (!languageDropdown.contains(event.relatedTarget)){
        languageDropdown.style.opacity = 0;
        languageDropdown.style.trasition = '1s';
    }
});

genderBtn.addEventListener('mouseover', () => {
    genderDropdown.style.opacity = 1;
    genderDropdown.style.trasition = '0.5s';
});

genderDropdown.addEventListener('mouseleave', () => {
    genderDropdown.style.opacity = 0;
    genderDropdown.style.trasition = '0.5s';
});

genderBtn.addEventListener('mouseleave', (event) =>{
    if (!genderDropdown.contains(event.relatedTarget)){
        genderDropdown.style.opacity = 0;
        genderDropdown.style.trasition = '0.5s';
    }
});