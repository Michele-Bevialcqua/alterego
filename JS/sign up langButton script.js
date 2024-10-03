let dropdownBtn = document.getElementById('lanngButton');
let dropdownMenu = document.getElementById('dropdownContent')

dropdownBtn.addEventListener('mouseover', (event) => {
    if (event. target == dropdownBtn){
        dropdownMenu.style.display = 'block';
    }
    else{
        dropdownBtn.style.display = 'none';
    }
})

