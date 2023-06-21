let indexSlide = null;
init();

function init() {
    // Кнопка - перелистать назад
    prevButtonNode.addEventListener('click', function(){
        recieveIndexActiveSlide();
        setActiveSlideIndex(getPrevIndexSlide());
    });

    // Кнопка - перелистать вперёд
    nextButtonNode.addEventListener('click', function(){
        recieveIndexActiveSlide();
        setActiveSlideIndex(getNextIndexSlide());
    });
};

// Функция устанавливающая индекс текущего слайда
function recieveIndexActiveSlide(){
    for(let i=0; i<arrayObjectsImages.length; i++){
        if(arrayObjectsImages[i].srcImg === imgModalWindowNode.src){
            // Получаем индекс объекта в массиве, которое содержит активный src адрес и присваиваем его в переменную indexSlide
            indexSlide = i;
        };
    };
};

function setActiveSlideIndex(index){
    indexSlide = index;
    console.log(indexSlide);
    imgModalWindowNode.src = arrayObjectsImages[indexSlide].srcImg;
};

// Почему то возвращает чилсо "-1"
function getPrevIndexSlide(){
    return indexSlide === 0 ? arrayObjectsImages.length - 1 : indexSlide - 1;
};

function getNextIndexSlide(){
    let arrayLengthMinusOne = arrayObjectsImages.length - 1;
    return indexSlide === arrayLengthMinusOne ? 0 : indexSlide + 1;
};