const Store = {
  selected: null,
  adoptablePets: [],
};

const proxiedStore = new Proxy(Store, {
  set(target, property, value) {
    target[property] = value;
    console.log("property", property);
    if (property === "adoptablePets") {
      window.dispatchEvent(new Event("dbmenuchange"));
    }
    if (property === "selected") {
      window.dispatchEvent(new Event("menuitemselect"));
    }
    return true;
  },
  get(target, property) {
    return target[property];
  },
});

export default proxiedStore;
