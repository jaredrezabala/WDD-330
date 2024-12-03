const baseURL = import.meta.env.VITE_SERVER_URL;
console.log("Base URL:", baseURL); // Debe mostrar "http://server-nodejs.cit.byui.edu:3000/"

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor(category) {
    // this.category = category;
    // this.path = `../json/${this.category}.json`;
  }
  async getData(category) {
    const response = await fetch(`${baseURL}products/search/${category}`);
    console.log("Response:", response);
    const data = await convertToJson(response);
    console.log("Data:", data);
    return data.Result;
  }
  async findProductById(id) {
    const response = await fetch(baseURL + `product/${id}`);
    const data = await convertToJson(response);
    return data.Result;
  }
}