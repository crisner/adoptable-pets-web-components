import Store from "../services/Store.js";
import { loadData } from "../services/AdoptablePetsList.js";
import Router from "../services/Router.js";

window._apContext = {};
_apContext.store = Store;
_apContext.router = Router;

window.addEventListener('DOMContentLoaded', function() {
    loadData();
    _apContext.router.init();
    console.log('Entry', _apContext);
});