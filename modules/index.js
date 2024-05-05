const content = document.querySelector('#content');
const firstBtn = document.querySelector('.first-btn');
const counter = {
    btn: 0
}


firstBtn.addEventListener('click', function() {
    let txt = document.createElement('p');
    ++counter.btn;
    txt.innerHTML = `Вы нажали ${counter.btn} раз`;
    content.appendChild(txt);
});