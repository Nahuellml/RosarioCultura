const btnPreview = document.getElementById('btnPreview');
const btnNext = document.getElementById('btnNext');
const sliderContainer = document.getElementById('slider-container');

const images = [
  'https://ojodeprensa.com.ar/wp-content/uploads/2023/09/florida.jpg', 
  'https://viapais.com.ar/resizer/ybaiB7PIuJNYHImBZmkvmb98Fvg=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/VE57MCFDPJF7ROPRTBAD3CDU64.JPG',
  'https://www.rosario3.com/__export/1679709393028/sites/rosario3/img/2023/03/24/marchamaria1.jpg_529145118.jpg',
  'https://www.elindependiente.com.ar/elindependiente/1.0/img/168705385.jpg',
  'https://images.mnstatic.com/81/f6/81f6b8cf5e7e5ee9ac47343802cf7ef0.jpg',
  'https://www.rosarionoticias.gob.ar/uploads/fotos/p1f8h00p3s1kf33jf16avc6obk6i.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/6/6f/Museo_Historico_Provincial_Dr._Julio_Marc.jpg',
  'https://viapais.com.ar/resizer/BcHRfVLUbbJjekKljMahcQZEBYc=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/NLDVEBBXNNEAPIKY34FURKRNZM.jpg',
  'https://www.rosario3.com/__export/1696073675080/sites/rosario3/img/2023/09/30/20230929-_dsc0610_crop1696073595527.jpg',
  'https://www.conclusion.com.ar/wp-content/uploads/2019/10/Monumento.jpg',
  'https://ciudadderosario.com/wp-content/uploads/2023/09/fiesta-de-las-colectividades.jpg',
  'https://www.cadena3.com/admin/playerswf/fotos/ARCHI_1043177.jpg'
]

//https://viapais.com.ar/resizer/Pw1rOB5_YBuX4itG18oc4ZnSm18=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/FOHL7OLQWNHO3HFRPCWBIJO3JA.jpg

const numImages = 4;
let currentImageIndex = 0;

function showImages() {
  sliderContainer.innerHTML = ''; // Limpiar el slider antes de agregar nuevas imágenes

  for (let i = 0; i < numImages; i++) {
    const imageIndex = (currentImageIndex + i) % images.length; // Calcula el índice de la imagen actual

    const slide = document.createElement('div');
    slide.classList.add('slide');

    const image = document.createElement('img');
    image.src = images[imageIndex];

    slide.appendChild(image);
    sliderContainer.appendChild(slide);
  }
}

function nextSlide() {
  currentImageIndex = (currentImageIndex + 1) % images.length; // Avanza al siguiente conjunto de imágenes
  showImages();
}

function prevSlide() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; // Retrocede al conjunto de imágenes anterior
  showImages();
}

// Mostrar las primeras imágenes
showImages();

// Agregar eventos para los botones de navegación
btnNext.addEventListener('click', nextSlide);
btnPreview.addEventListener('click', prevSlide);