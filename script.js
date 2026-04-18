const wrapper = document.querySelector('.wrapper');
const loginBtn = document.querySelector('.btnLogin-popup');
const closeBtn = document.querySelector('.icon-close');

// open
loginBtn.addEventListener('click', () => {
    wrapper.classList.add('active');
});

// close
closeBtn.addEventListener('click', () => {
    wrapper.classList.remove('active');
});