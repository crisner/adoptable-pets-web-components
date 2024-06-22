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
    return true;
  },
  get(target, property) {
    return target[property];
  },
});

export default proxiedStore;
