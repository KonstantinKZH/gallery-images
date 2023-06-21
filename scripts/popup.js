// Открывает модальное окно
function modalWindowOpen(){
    popupNode.classList.toggle('popup_open');
};

// Открывает изображение в модальном окне
function showImageInModalWindow(){
    console.log('Я нажал по изображению')
    window.onclick = function(e){
        let imgaeWasClicked = e.target;
        console.log(imgaeWasClicked);

        arrayObjectsImages.forEach(item =>{
            if(imgaeWasClicked.src === item.srcImg){
                imgModalWindowNode.src = item.srcImg;
            };
        });

        if(imgaeWasClicked.classList.contains('popup')){
            popupNode.classList.remove('popup_open');
            return;
        };
    };
};

// // Записывает теги div с классом - js-popup-content__slides - в массив "slidesNode"
// function showTegs(){
//     document.addEventListener('DOMNodeInserted', function(e){
//         console.log(e.target);
//         slidesNodes.push(e.target);
//         console.log(slidesNodes);
//     });
// };

// Закрывает модальное окно при клике по пустой области
window.onclick = function(e){
    const itemsHTML = e.target;
    if(itemsHTML.classList.contains('js-gallery-wrapper__items-img')){
        popupNode.classList.add('popup_open');
    } else if(itemsHTML.classList.contains('js-popup')){
        popupNode.classList.remove('popup_open');
    };
};