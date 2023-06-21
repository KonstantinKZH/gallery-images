// Кнопка (крестик) удаления изображения
document.getElementById("gallery").onclick = function(e){
    const crossDelete = e.target;
    console.log(crossDelete);
    if(crossDelete.classList.contains('gallery-wrapper__items-delete')){
        for(let i=0; i<arrayObjectsImages.length; i++){
            if(crossDelete.attributes[1].value === arrayObjectsImages[i].srcCross ){
                if(crossDelete === document.getElementsByClassName('gallery-wrapper__items-delete')[i]){
                    document.getElementsByClassName('gallery-wrapper__items')[i].remove();
                    arrayObjectsImages.splice(i, 1); // Начиная с индекса элемента, который мы хотим удалить, удалить один элемент, то есть выбранное изображение
                    document.getElementById("iput-files").value = ""; // Чистим input[type="file"] для того, чтобы после удаления можно было повторно загрузить удалённый файл
                    return;
                };
            };
        };
    };
}