let capsLockWarning = document.getElementById('capsLockWarning')

document.addEventListener('keydown', function(event) {
if(event.getModifierState('CapsLock')){
    capsLockWarning.style.opacity = 1 ;
    capsLockWarning.style.color = 'rgb(183, 6, 6)';
    capsLockWarning.style.textDecoration = 'underline';
}
else {
    capsLockWarning.style.opacity = 0 ;
}
})