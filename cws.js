document.querySelector('.cws-menu')
.addEventListener('click', () => {
    document.querySelector('.container')
    .classList.toggle('change')
});

document.querySelector('.nav-list')
.addEventListener('click', (e) => {
    const ele = e.target.parentElement

    if(ele.classList[0] === 'nav-link')
    {
        ele.nextElementSibling.classList
        .toggle('change');
        ele.classList.toggle('change');
    }
})