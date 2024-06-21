export default class DatabasePage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback () {
    const template = document.getElementById('database-page-template');
    const content = template.content.cloneNode(true);
    this.appendChild(content);
  }
}

customElements.define("database-page", DatabasePage);
