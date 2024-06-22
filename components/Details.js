export default class Details extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({mode: true});
  }

  connectedCallback () {
    const template = document.getElementById('details-template');
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);
  }
}

customElements.define("details-section", Details);
