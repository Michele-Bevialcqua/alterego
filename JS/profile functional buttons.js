let {
    profileBtn = document.getElementById('editProfileBtn'),
    profileDropdown = document.getElementById('editProfileContent'),
    preferencesBtn = document.getElementById('preferencesBtn'),
    preferencesDropdown = document.getElementById('preferencesDropdownContent'),
    settingsBtn = document.getElementById('settingsBtn'),
    settingsDropdown = document.getElementById('settingDropdownContent')
}={}

profileBtn.addEventListener('mouseover', () => {
    profileDropdown.style.opacity = 1;
    profileDropdown.style.transition = '0.3s';
});

profileDropdown.addEventListener('mouseleave', () => {
    profileDropdown.style.opacity = 0;
});

profileBtn.addEventListener('mouseleave', (event) => {
    if(!profileDropdown.contains(event.relatedTarget)){
        profileDropdown.style.opacity = 0;
    }
});

preferencesBtn.addEventListener('mouseover', () => {
    preferencesDropdown.style.opacity = 1;
    preferencesDropdown.style.transition = '0.3s';
});

preferencesDropdown.addEventListener('mouseleave', () => {
    preferencesDropdown.style.opacity = 0;
});

preferencesBtn.addEventListener('mouseleave', (event) => {
    if(!preferencesDropdown.contains(event.relatedTarget)){
        preferencesDropdown.style.opacity = 0;
    }
});

settingsBtn.addEventListener('mouseover', () => {
    settingsDropdown.style.opacity = 1;
    settingsDropdown.style.transition = '0.3s';

});

settingsDropdown.addEventListener('mouseleave', () => {
    settingsDropdown.style.opacity = 0;
});

settingsBtn.addEventListener('mouseleave', (event) => {
    if(!settingsDropdown.contains(event.relatedTarget)){
        settingsDropdown.style.opacity = 0;
    }
});