import API from "../services/API.js";

export default class Menu extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({mode: 'open'});
    const styles = document.createElement('style');
    this.root.appendChild(styles);
    API.loadCSS('../components/Menu.css', styles);
  }

  connectedCallback () {
    const template = document.getElementById('menu-template');
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);

    window.addEventListener('dbmenuchange', () => {
      this.render();
    });
    this.render();
  }

  render() {
    const menuEl = this.root.querySelector('#menu');
    const menuData = _apContext.store.adoptablePets;
    if(menuData) {
      menuData.forEach(function(pet) {
        const petEl = document.createElement('li');
        petEl.innerHTML = `
        <a href='details/${pet.id}'>${pet.name}</a>
        `;
        menuEl.appendChild(petEl);
      })
    } else {
      menuEl.innerHTML = 'Loading...'
    }
  }
}

customElements.define('menu-section', Menu);