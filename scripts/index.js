const inputTypeFileNode = document.querySelector('.js-input-type-file');
const iconDownloadNode = document.querySelector('.js-btn-download');
const imageNode = document.querySelector('.js-gallery-wrapper__items-img');
const popupNode = document.querySelector('.js-popup');
const popupContentNode = document.querySelector('.js-popup-content');
const imgModalWindowNode = document.querySelector('.js-popup-content__img');

const prevButtonNode = document.querySelector('.js-popup-content__arrows-prev');
const nextButtonNode = document.querySelector('.js-popup-content__arrows-next');

//Массив объектов с данными об изображении
const arrayObjectsImages = [];
let indexImg = -1;
// Кнопка загрузки изображений
window.onload = function(){
    iconDownloadNode.addEventListener('click', function(){
        inputTypeFileNode.click();
    });

    inputTypeFileNode.addEventListener('change', function(){
        let curFiles = inputTypeFileNode.files;
        indexImg++;
        if(curFiles.length !== 0){
            for(let i=0; i < curFiles.length; i++){
                let srcImg = window.URL.createObjectURL(curFiles[i]);
                
                createNewObject(
                    curFiles[i].name, 
                    curFiles[i].lastModified, 
                    curFiles[i].lastModifiedDate, 
                    curFiles[i].webkitRelativePath, 
                    curFiles[i].size, 
                    srcImg,
                    indexImg, // Индекс (в массиве - arraObjectsImage) добавленного на страницу элемента
                    );
            };
            showArrayContents();
        };
    });
};

// Открытие модального окна с изображением при клике по нему
document.addEventListener('click', function(e){
    // Получаем элементы на странице
    const image = e.target;
    
    if(image.classList.contains('gallery-wrapper__items-img')){
        modalWindowOpen();
        showImageInModalWindow();
    };
});