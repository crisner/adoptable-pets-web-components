export default class EmptyDetails extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({mode: 'open'});
  }

  connectedCallback () {
    const template = document.getElementById('empty-details-template');
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);
    // this.render();
  }
  
}

customElements.define("empty-details-section", EmptyDetails);
