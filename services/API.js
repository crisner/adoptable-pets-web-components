const API = {
  url: "/data/data.json",
  fetchAdoptable: async () => {
    const result = await fetch(API.url);
    return await result.json();
  },
  loadCSS: async (path, element) => {
    const result = await fetch(path);
    element.textContent = await result.text();
  },
  findById: (id) => {
    if (_apContext.store.adoptablePets.length > 0) {
      const details = _apContext.store.adoptablePets.filter(
        (pet) => pet.id === id
      );
      return details.length > 0 ? details[0] : null;
    }
  },
};

export default API;
