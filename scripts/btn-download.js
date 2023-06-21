function createNewObject(name, lastModified, lastModifiedDate, webkitRelativePath, size, srcImg, indexImg){
    const newObject = {
        name, 
        lastModified, 
        lastModifiedDate, 
        webkitRelativePath, 
        size, 
        srcImg,
        indexImg,
        srcCross: "resources/icons/icon-delete/cross.png",
    };
    arrayObjectsImages.push(newObject);
    console.log(arrayObjectsImages);
};

function showArrayContents(){
    let imgsContentsHTML = '';
    const galleryWrapperImages = document.querySelector('.js-gallery-wrapper__images');
    arrayObjectsImages.forEach(item =>{
        let imgContentsHTML = `
            <div class="gallery-wrapper__items">
                <img class="js-gallery-wrapper__items-img gallery-wrapper__items-img" src="${item.srcImg}" alt="Иконка загрузки изображения">
                <p class="js-gallery-wrapper__items-name gallery-wrapper__items-name">${item.name}</p>
                <img class="gallery-wrapper__items-delete" src="${item.srcCross}" alt="Крестик удаления изображения">
            </div>
        `;
        imgsContentsHTML += imgContentsHTML;
        galleryWrapperImages.innerHTML = imgsContentsHTML;
    });
};

