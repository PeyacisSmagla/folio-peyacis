const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click' , () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    if(body.classList.contains('dark-mode')) {
        modeToggle.innerHTML = '<i class="fas fa-moon"  style="color : #fff;" ></i>';
        
    } else {
        modeToggle.innerHTML = '<i class="fas fa-sun" ></i>';

    }
})