const batForm = document.querySelector('.closed')
const vampForm = document.querySelector('.open')

batForm.addEventListener('click', () => {
    if(vampForm.classList.contains('open')) {
        vampForm.classList.add('active');
        batForm.classList.remove('active'); 
    }
}) ;