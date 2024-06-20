const Router = {
  init: function () {
    var links = document.querySelectorAll(".item-link");
    links.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        var url = event.target.href;
        Router.go(url);
      });
    });
    // Listen to url changes
    window.addEventListener("popstate", function (event) {
      Router.go(event.state.path, false);
    });
    // Check initial url
    Router.go(location.pathname);
  },
  go: function (path, addToHistory = true) {
    console.log("going to path:", path);
    if (addToHistory) {
      history.pushState({ path }, null, path);
    }
    var pageElement = null;
    var navElement = document.createElement("ul");
    var navItem = document.createElement("li");
    var navLink = document.createElement("a");
    navLink.classList.add('item-link');
    navLink.innerText = 'Link';
    navLink.href = "details/21";
    navLink.addEventListener("click", function (event) {
        event.preventDefault();
        var url = 'details/21';
        console.log('url', event.target.href);
        Router.go(url);
      });
    navItem.appendChild(navLink);
    navElement.appendChild(navItem);
    switch (path) {
      case "/":
        pageElement = new DocumentFragment();
        pageElement.appendChild(navElement);
        let titleElement = document.createElement("h2");
        titleElement.innerText =
          "Please select an adoptable pet from the left to see details!";
        pageElement.appendChild(titleElement);
        break;

      default:
        console.log('path', path);
        if (path.startsWith("details/")) {
          pageElement = new DocumentFragment();
          pageElement.appendChild(navElement);
          let details = document.createElement("section");
          let titleElement = document.createElement("h2");
          titleElement.innerText = "Details";
          details.appendChild(titleElement);
          const paramID = path.substring(path.lastIndexOf("/" + 1));
          console.log('paramID', paramID);
          details.dataset.id = paramID;
          pageElement.appendChild(details);
        }
        break;
    }
    if (pageElement) {
      var main = document.querySelector("main");
      main.innerHTML = "";
      main.appendChild(pageElement);
    }
    window.scrollX = 0;
    window.scrollY = 0;
  },
};

export default Router;
