import API from "./API.js";

export async function loadData() {
  _apContext.store.adoptablePets = await API.fetchAdoptable();
}
