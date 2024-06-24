import API from "../services/API.js";

export default class Details extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    const styles = document.createElement("style");
    this.root.appendChild(styles);
    API.loadCSS("../components/Details.css", styles);
  }

  connectedCallback() {
    const template = document.getElementById("details-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);
    this.render();
  }

  render() {
    if (this.dataset.id && _apContext.store.selected) {
      const selectedDetails = API.findById(_apContext.store.selected);
      if (selectedDetails) {
        const name = this.root.getElementById("pet-name");
        name.innerText = selectedDetails.name;
        const details = this.root.getElementById("pet-details");
        const pic = details.querySelector("img");
        pic.src = selectedDetails.photo ?? "";
        details.querySelector(".type").innerText = selectedDetails.type;
        details.querySelector(".age").innerText = selectedDetails.age;
        details.querySelector(".gender").innerText = selectedDetails.gender;
        details.querySelector(".breed").innerText =
          selectedDetails.breeds?.unknown || selectedDetails.breeds?.primary;
        details.querySelector(".description").innerText =
          selectedDetails.description;
      }
    }
  }
}

customElements.define("details-section", Details);
