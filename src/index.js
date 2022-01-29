import {galleryItems} from './app.js'

const ref = {
    gallery: document.querySelector('.js-gallery'),
    lightbox: document.querySelector('.js-lightbox'),
    lightBoxImg: document.querySelector('.lightbox__image'),
    closeButton: document.querySelector('.lightbox__button'),
};

function getImage(arr) {
    const list =
        arr.map(({ preview, description, original }) => 
            `<li class='gallery__item'><img class='gallery__image'
             src="${preview}" data-url="${original}" alt="${description}"></li>`
        ).join('');
    return list;
};

ref.gallery.insertAdjacentHTML('afterbegin', getImage(galleryItems));

function addLightbox(e1) {
    ref.lightbox.classList.add('is-open');
    ref.lightBoxImg.src = e1.target.dataset.url;
    window.addEventListener('keydown', e2 => {
        if (e2.key == 'Escape') {
        console.dir(e1.target)
        closeLightBox();                 
        }
        // if (e2.key == 'ArrowLeft') {
        //     ref.lightBoxImg.src = e1.target.parentNode.previousSibling.firstChild.dataset.url;
        //     console.dir(e1)
        // };
        //         if (e2.key == 'ArrowRight') {
        //     ref.lightBoxImg.src = e1.target.parentNode.nextSibling.firstChild.dataset.url;     
        // };
 })
    
};
function closeLightBox() {
    ref.lightbox.classList.remove('is-open');
    ref.lightBoxImg.src = ''
}
   
ref.closeButton.addEventListener('click', closeLightBox)
            

ref.gallery.addEventListener('click', e => {
    if (e.target.nodeName === "IMG") {
        addLightbox(e);
    }
});



