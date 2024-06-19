const API = {
  url: "/data/data.json",
  fetchAdoptable: async () => {
    const result = await fetch(API.url);
    return await result.json();
  },
};

export default API;
