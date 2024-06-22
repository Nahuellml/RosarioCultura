class ArticleElement extends HTMLElement {
  constructor() {
    super();
    
    //Crear un shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    const name = this.getAttribute('name');
    
    //Definir los estilos y la estructura en template strings
    const template = document.createElement('template');
    template.innerHTML = /*html*/ `
      <style>
        .article-container {
          display: inline-block;
          justify-content: flex-end; 
          width: 250px;
          height: 150px;
          margin: 0 5px;
          background: #f20;
          overflow: hidden;
        }
        
        .article-container:hover {
          opacity: 0.5;
        }

        .article-h2 {
          position: absolute;
          color: white;
          z-index: 5;
        }
        .article-img {
          position: relative;
          width: 100%;
          object-fit: contain;
        }

      </style>
      <a href="/section-pages/articulos.html" class="article-container">
        <img class="article-img" src="./assets/slider-articulos/${name}.jpg" alt="${name}">
        <h2 class="article-h2">${name}</h2>
      </a>
    `;

    //Adjuntar el contenido del template al shadow root
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('article-element', ArticleElement);

export default ArticleElement;