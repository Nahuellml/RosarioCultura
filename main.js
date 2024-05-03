///////////////  SLIDER PRINCIPAL  /////////////
const meses = [
  {
    mes: 'Enero', place: 'La Florida', description: 'loremjdjfjf jdfsaj fjfsajfsajfsj jf ajfs jfssjafsfhwjr', image: 'assets/atardecer.jpeg'
  },
  {
    mes: 'Febrero', place: 'Carnavales', description: 'loremjdjfjf jdfsaj fjfsajfsajfsj jf ajfs jfssjafsfhwjr', image: 'assets/paisaje.jpg'
    
  },
  {
    mes: 'Marzo', place: 'Carnavales', description: 'loremjdjfjf jdfsaj fjfsajfsajfsj jf ajfs jfssjafsfhwjr', image: 'https://img.freepik.com/foto-gratis/puesta-sol-misurina_181624-34793.jpg?t=st=1713888383~exp=1713891983~hmac=4783aaf120e9c98e2da14c6603e53a67f1c13627b600418864714602076fc314&w=740'
    
  },
  {
    mes: 'Abril', place: 'Malvinas', description: 'loremjdjfjf jdfsaj fjfsajfsajfsj jf ajfs jfssjafsfhwjr', image: 'https://images.unsplash.com/photo-1708804760932-d97756d67419?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    
  },
  {
    mes: 'Mayo', place: 'Carnavales', description: 'loremjdjfjf jdfsaj fjfsajfsajfsj jf ajfs jfssjafsfhwjr', image: 'https://imgs.search.brave.com/I5U6zhjLDM_4w1h-IQK1hFNyHK1tEWFmDUMP_UK9SDI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQz/ODExODc1Ni9lcy9m/b3RvL3RvbWEtYSVD/MyVBOXJlYS1zb2Jy/ZS1lbC1yJUMzJUFE/by1wYXJhbiVDMyVB/MS1mcmVudGUtYS1s/YS1jaXVkYWQtZGUt/cm9zYXJpby5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9YS02/M29EZXI5WUNEMkg4/QzBpWWVBZWcyMTg3/NzFVdl81eFJOTVM5/Sng5ST0'
    
  },
  {
    mes: 'Junio', place: 'Dia de la Bandera', description: 'loremjdjfjf jdfsaj fjfsajfsajfsj jf ajfs jfssjafsfhwjr', image: 'https://imgs.search.brave.com/EhKcLvaTMu4-MhDILXah4eg2UTb65lVFUVFo2DEkJa8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/d2VsY29tZWFyZ2Vu/dGluYS5jb20vcm9z/YXJpby9pbWFnZW5l/cy9yb3NhcmlvMjku/anBn'
    
  },
  {
    mes: 'Julio', place: 'Carnavales', description: 'loremjdjfjf jdfsaj fjfsajfsajfsj jf ajfs jfssjafsfhwjr', image: 'https://plus.unsplash.com/premium_photo-1700577888245-9729a4fe6040?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    
  },
  {
    mes: 'Agosto', place: 'Carnavales', description: 'loremjdjfjf jdfsaj fjfsajfsajfsj jf ajfs jfssjafsfhwjr', image: 'https://imgs.search.brave.com/y0ojmSsbE7pFmI3VVNqJv1B-dDLvPYTAgXtjY1kXilo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/d2VsY29tZWFyZ2Vu/dGluYS5jb20vcm9z/YXJpby9pbWFnZW5l/cy9yb3NhcmlvLTE0/OS5qcGc'
    
  },
  {
    mes: 'Septiembre', place: 'Carnavales', description: 'loremjdjfjf jdfsaj fjfsajfsajfsj jf ajfs jfssjafsfhwjr', image: 'https://media.istockphoto.com/id/1220007180/es/foto/vista-panor%C3%A1mica-de-la-ciudad-de-rosario-a-lo-largo-del-r%C3%ADo-paran%C3%A1-durante-la-puesta-del-sol.jpg?s=612x612&w=0&k=20&c=TyuUWT17vhzEmfIDFbGpTr8s7it-5zHwo1VSPYau8-A='
    
  },
  {
    mes: 'Octubre', place: 'Carnavales', description: 'loremjdjfjf jdfsaj fjfsajfsajfsj jf ajfs jfssjafsfhwjr', image: 'https://lh5.googleusercontent.com/proxy/n27m6HwUaWVVfWwfHHbc4ICjdzXtAB8U1132B_S3o5Ric3ytNc9Ev6Q2mgKNb5Sdr1f3pOR4NGeehJjl6w8nmpKAKFQCevWAEcZ0Ie0G5a3tZ3KtVvNo4LtqJhkWSNj7dE06'
    
  },
  {
    mes: 'Noviembre', place: 'Colectividades', description: 'loremjdjfjf jdfsaj fjfsajfsajfsj jf ajfs jfssjafsfhwjr', image: 'https://media.istockphoto.com/id/1441190334/es/foto/hermosa-foto-de-un-d%C3%ADa-soleado-en-skate-park.jpg?s=612x612&w=0&k=20&c=-yhtTQGJKfIq8WwzsKwKMp1bib1FDAbm4aWKx_2dnc4='
    
  },
  {
    mes: 'Diciembre', place: 'Fiestas', description: 'loremjdjfjf jdfsaj fjfsajfsajfsj jf ajfs jfssjafsfhwjr', image: 'https://t4.ftcdn.net/jpg/02/28/72/81/360_F_228728148_rTnDutNQJZwhaJTAjpID197qYi6HTRbA.jpg'
    
  },
];


class Cards {
  constructor(mes, place, description, image) {
    this.mes = mes;
    this.place = place;
    this.description = description;
    this.image = image;
    this.cardElement = this.createCard();
    this.presentacionElement = this.createPresentacion();
  }

  createCard() {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card');

    const containerText = document.createElement('div');
    containerText.classList.add('container-text');

    const placeText = document.createElement('div');
    placeText.classList.add('place-text');
    placeText.innerHTML = this.place;
    containerText.appendChild(placeText);

    const mesText = document.createElement('div');
    mesText.classList.add('mes-text');
    mesText.innerHTML = this.mes;
    containerText.appendChild(mesText);

    const descriptionText = document.createElement('div');
    descriptionText.classList.add('description-text');
    containerText.appendChild(descriptionText);
    descriptionText.innerHTML = this.description;

    cardContainer.appendChild(containerText);

    const imgElement = document.createElement('img');
    imgElement.src = this.image;
    imgElement.alt = this.mes;

    cardContainer.appendChild(imgElement);

    return cardContainer;
  }

  createPresentacion() {
    const presentacion = document.createElement('div');
    presentacion.classList.add('presentacion');

    const containerText = document.createElement('div');
    containerText.classList.add('container-text');

    const mesText = document.createElement('div');
    mesText.classList.add('mes-text');
    mesText.innerHTML = this.mes;
    containerText.appendChild(mesText);
    
    const placeText = document.createElement('div');
    placeText.classList.add('place-text');
    placeText.innerHTML = this.place;
    containerText.appendChild(placeText);
    
    const descriptionText = document.createElement('div');
    descriptionText.classList.add('description-text');
    containerText.appendChild(descriptionText);
    descriptionText.innerHTML = this.description;
    presentacion.appendChild(containerText);

    const imgElement = document.createElement('img');
    imgElement.src = this.image;
    imgElement.alt = this.mes;

    presentacion.appendChild(imgElement);

    return presentacion;
  }
}

const fragmentCards = document.querySelector('.fragment-cards');
//const fragmentPresentacion = document.querySelector('.fragment-presentacion');
/* // Agregar listeners a los botones
document.getElementById('prevButton').addEventListener('click', prevSlide);
document.getElementById('nextButton').addEventListener('click', nextSlide); */

/* let currentIndex = 0;

function prevSlide() {
  const presentaciones = document.querySelectorAll('.presentacion');

  // Ocultar la presentación actual
  presentaciones[currentIndex].style.display = 'none';

  // Actualizar currentIndex
  currentIndex = (currentIndex - 1 + meses.length) % meses.length;

  // Mostrar la nueva presentación
  presentaciones[currentIndex].style.display = 'block';
}

function nextSlide() {
  const presentaciones = document.querySelectorAll('.presentacion');

  // Ocultar la presentación actual
  presentaciones[currentIndex].style.display = 'none';

  // Actualizar currentIndex
  currentIndex = (currentIndex + 1) % meses.length;

  // Mostrar la nueva presentación
  presentaciones[currentIndex].style.display = 'block';
}*/



/* function showSlide(index) {
  const presentaciones = document.querySelectorAll('.presentacion');

  presentaciones[currentIndex].classList.remove('active');

  currentIndex = (index + meses.length) % meses.length;

  presentaciones[currentIndex].classList.add('active');
} */

meses.forEach(({ mes, place, description, image }) => { 
  const card = new Cards(mes, place, description, image);
  fragmentCards.appendChild(card.cardElement);
  //fragmentPresentacion.appendChild(card.presentacionElement);
});

document.getElementById('nextButton').onclick = function(){
  let lists = document.querySelectorAll('.card');
  fragmentCards.appendChild(lists[0]);
}

document.getElementById('prevButton').onclick = function(){
  let lists = document.querySelectorAll('.card');
  fragmentCards.prepend(lists[lists.length - 1]);
}

//showSlide(currentIndex);

function slide () {
  let lists = document.querySelectorAll('.card');
  fragmentCards.appendChild(lists[0]);
}

setInterval(slide, 3000)

///////////////  SLIDER MESES  ///////////////
const sliderContainer = document.getElementById('slider-container');
const btnPreview = document.getElementById('btnPreview');
const btnNext = document.getElementById('btnNext');

const totalImages = 12;
const visibleImages = 4;
let currentIndex = 0;

const images = [
    'https://www.cadena3.com/admin/playerswf/fotos/ARCHI_REL_970458.jpg',
    'https://imgs.search.brave.com/IWCKRB7HG_7dUgjEp2EAaZH8L30Aa2xn16SKJi6tIKU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zcC1h/by5zaG9ydHBpeGVs/LmFpL2NsaWVudC90/b19hdXRvLHFfZ2xv/c3N5LHJldF9pbWcs/d182NDAsaF80Mjcv/aHR0cHM6Ly93d3cu/ZGlzZnJ1dGFyb3Nh/cmlvLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNy8wMi9E/ZXNmaWxlLWRlLWNh/cm5hdmFsLWVuLWVs/LWNvcnMlQzMlQjNk/cm9tby1jb3BpYS5q/cGc',
    'https://www.rosario3.com/__export/1679709393028/sites/rosario3/img/2023/03/24/marchamaria1.jpg_529145118.jpg',
    'https://www.elindependiente.com.ar/elindependiente/1.0/img/168705385.jpg',
    'https://images.mnstatic.com/81/f6/81f6b8cf5e7e5ee9ac47343802cf7ef0.jpg',
    'https://www.rosarionoticias.gob.ar/uploads/fotos/p1f8h00p3s1kf33jf16avc6obk6i.jpg',
    'https://lh6.ggpht.com/_luuev_TV_UU/TG38hVVrrII/AAAAAAAAAGY/vz8qcS9RsRk/s800/IMG_3500.JPG',
    'https://upload.wikimedia.org/wikipedia/commons/6/6f/Museo_Historico_Provincial_Dr._Julio_Marc.jpg',
    'https://www.rosario3.com/__export/1696073675080/sites/rosario3/img/2023/09/30/20230929-_dsc0610_crop1696073595527.jpg',
    'https://media.cdn.puntobiz.com.ar/102020/1617635940521.webp?cw=984&ch=553&extw=jpg',
    'https://blog.esplendorhoteles.com/wp-content/uploads/2019/11/Feria-de-las-colectividades.jpg',
    'https://www.cadena3.com/admin/playerswf/fotos/ARCHI_1043177.jpg'
];

const preloadedImages = [];
for (let i = 0; i < totalImages; i++) {
    const image = new Image();
    image.src = images[i % totalImages];
    preloadedImages.push(image);
}

function updateSlider() {
    sliderContainer.innerHTML = '';
    for (let i = currentIndex; i < currentIndex + visibleImages; i++) {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('container-mes');
        imgContainer.style.backgroundImage = `url(${images[i % totalImages]})`;
        
        const text = document.createElement('span');
        text.classList.add('text');
        text.textContent = obtenerNombreMes(i + 1);

        const season = document.createElement('div');
        season.classList.add('season');

        // Asignar color según la estación del año
        const currentMonth = (i + 1) % 12;
        if (currentMonth >= 1 && currentMonth <= 3) {
            season.style.backgroundColor = '#ffda07'; // Verano
            season.innerHTML = 'Verano';
        } else if (currentMonth >= 4 && currentMonth <= 6) {
            season.style.backgroundColor = '#fac20b'; // Otoño
            season.innerHTML = 'Otoño';
        } else if (currentMonth >= 7 && currentMonth <= 9) {
            season.style.backgroundColor = '#3051ac'; // Invierno
            season.innerHTML = 'Invierno';
        } else {
            season.style.backgroundColor = '#29ac09'; // Primavera
            season.innerHTML = 'Primavera';
        }

        imgContainer.appendChild(text);
        imgContainer.appendChild(season);
        sliderContainer.appendChild(imgContainer);
    }
}

function moveSliderLeft() {
    currentIndex = (currentIndex - 3 + totalImages) % totalImages;
    updateSlider();
}

function moveSliderRight() {
    currentIndex = (currentIndex + 3) % totalImages;
    updateSlider();
}

function obtenerNombreMes(indice) {
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return meses[(indice - 1) % 12];
}

window.addEventListener('click', (e) => {
    if (e.target === btnPreview) {
        moveSliderLeft();
    }

    if (e.target === btnNext) {
        moveSliderRight();
    }
});

// Inicializar el slider
updateSlider();