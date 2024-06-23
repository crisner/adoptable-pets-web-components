const Router = {
  init: function () {
    // Listen to url changes
    window.addEventListener("popstate", function (event) {
      _apContext.store.selected = event.state.id;
      Router.go(event.state.path, false);
    });
    // Check initial url
    Router.go(location.pathname);
  },
  go: function (path, addToHistory = true) {
    if (addToHistory) {
      history.pushState(
        typeof path == "string" ? { path } : path,
        null,
        typeof path == "string" ? path : path.path
      );
    }
    var pageElement = null;

    var databasePage = document.createElement("database-page");
    databasePage.classList.add("database-container");
    switch (typeof path == "string" ? path : path.path) {
      case "/":
        pageElement = databasePage;
        break;
      default:
        var pathname = typeof path == "string" ? path : path.path;
        if (pathname.startsWith("details/")) {
          pageElement = databasePage;
          const paramID = pathname.substring(pathname.lastIndexOf("/") + 1);
          pageElement.dataset.id = paramID;
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
