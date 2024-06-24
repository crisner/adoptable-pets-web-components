import API from "../services/API.js";
import Router from "../services/Router.js";

export default class Menu extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    const styles = document.createElement("style");
    this.root.appendChild(styles);
    API.loadCSS("../components/Menu.css", styles);
  }

  connectedCallback() {
    const template = document.getElementById("menu-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);

    window.addEventListener("dbmenuchange", () => {
      this.render();
    });
    this.render();
  }

  render() {
    const menuEl = this.root.querySelector("#menu");
    const menuData = _apContext.store.adoptablePets;
    if (menuData) {
      menuData.forEach(function (pet) {
        const petEl = document.createElement("li");
        const petLink = document.createElement("a");
        petLink.classList.add("item-link");
        petLink.href = `/details/${pet.id}`;
        petLink.innerText = `${pet.name}`;
        petLink.id = pet.id;
        petEl.appendChild(petLink);
        menuEl.appendChild(petEl);

        petLink.addEventListener("click", function (event) {
          event.preventDefault();
          console.log("event", event.target.getAttribute("href"));
          var url = event.target.getAttribute("href");
          _apContext.store.selected = pet.id;
          Router.go({path: url, id: pet.id});
        });
      });
    } else {
      menuEl.innerHTML = "Loading...";
    }
  }
}

customElements.define("menu-section", Menu);
