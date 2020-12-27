const veryDarkGrayishBlue = '#48556a';
const shareButton = document.querySelector('.btn');
const shareBox = document.querySelector('.share-box');

const showShareBox = function () {
    if (shareBox.classList.value.includes('share-box-hidden')) {
        shareBox.classList.remove('share-box-hidden')
        shareButton.classList.add('btn-clicked')
    } else {
        shareBox.classList.add('share-box-hidden')
        shareButton.classList.remove('btn-clicked')
    }
    
}


shareButton.addEventListener('click', showShareBox);