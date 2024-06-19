import Store from "../services/Store.js";
import { loadData } from "../services/AdoptablePetsList.js";

window._apContext = {};
_apContext.store = Store;

window.addEventListener('DOMContentLoaded', function() {
    loadData();
    console.log('Entry', _apContext);
});