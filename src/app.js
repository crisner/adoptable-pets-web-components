import Store from "../services/Store.js";
import { loadData } from "../services/AdoptablePetsList.js";
import Router from "../services/Router.js";
// Import web components
import Menu from "../components/Menu.js";
import Details from "../components/Details.js";
import DatabasePage from "../pages/DatabasePage.js";

window._apContext = {};
_apContext.store = Store;
_apContext.router = Router;

window.addEventListener('DOMContentLoaded', function() {
    loadData();
    _apContext.router.init();
    console.log('Entry', _apContext);
});