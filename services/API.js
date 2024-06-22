const API = {
  url: "/data/data.json",
  fetchAdoptable: async () => {
    const result = await fetch(API.url);
    return await result.json();
  },
  loadCSS: async (path, element) => {
    const result = await fetch(path);
    element.textContent = await result.text();
  }
};

export default API;
