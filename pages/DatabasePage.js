export default class DatabasePage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = document.getElementById("database-page-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);
    window.addEventListener("menuitemselect", () => {
      this.render({ selected: _apContext.store.selected });
    });
    this.render();
  }

  render(props) {
    const menuContainer = document.getElementById("menu-container");
    if (!document.querySelector("menu-section")) {
      const menu = document.createElement("menu-section");
      menuContainer.appendChild(menu);
    }
    if (props?.selected) {
      const detailsContainer = document.querySelector(".details-container");
      if (detailsContainer) {
        detailsContainer.remove();
      }
    }
    const details = document.createElement(
      props?.selected ? "details-section" : "empty-details-section"
    );
    if (props?.selected) {
      details.dataset.id = props.selected;
    }
    details.classList.add("details-container");
    menuContainer.insertAdjacentElement("afterend", details);
  }
}

customElements.define("database-page", DatabasePage);
