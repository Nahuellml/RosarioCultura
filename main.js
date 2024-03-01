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