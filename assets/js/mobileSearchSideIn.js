const searchBtn = document.querySelector('.js-mobile-search-btn');
const closeBtn = document.querySelector('.js-mobile-close-btn');
const headerSearchBox = document.querySelector('.js-header__search-box');


function showHeaderSearchBox() {
    headerSearchBox.classList.add('open');
    searchBtn.classList.add('none');
    closeBtn.classList.add('appear');
}

function hideHeaderSearchBox () {
    headerSearchBox.classList.remove('open');
    searchBtn.classList.remove('none');
    closeBtn.classList.remove('appear');
}

searchBtn.addEventListener('click', showHeaderSearchBox);
closeBtn.addEventListener('click', hideHeaderSearchBox);

// Loại bỏ hành vi mặc định của thẻ a
searchBtn.onclick = function(e) {
    e.preventDefault();

}

closeBtn.onclick = function(e) {
    e.preventDefault();

}
