window.onload = ()=>{
    btnClick();
    closeBtnClick();
}

var btnClick = () => {
    var btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.onclick = () => {
            var clickValue = btn.getAttribute('name')
            openPopup(clickValue)
        }
    })
}

var openPopup = (ClickNum) => {
    var popupWrapper = document.querySelector('.popup-wrapper'),
        selectPopup = document.querySelector('.sub' + ClickNum);
    
    popupWrapper.classList.add('show')
    selectPopup.classList.add('show')
}

var closeBtnClick = () => {
    var btns = document.querySelectorAll('.close');
    btns.forEach(btn => {
        btn.onclick = () => {
            var clickValue = btn.getAttribute('name')
            closePopup(clickValue)
        }
    })
}

var closePopup = (ClickNum) => {
    var popupWrapper = document.querySelector('.popup-wrapper'),
        selectPopup = document.querySelector('.sub' + ClickNum);
    
    popupWrapper.classList.remove('show')
    selectPopup.classList.remove('show')
}

