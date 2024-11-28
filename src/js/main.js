import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const dataSource = new ProductData("tents");
const productListElement = document.querySelector(".product-list");
const productListing = new ProductListing(
  "tents",
  dataSource,
  productListElement,
);
productListing.init();
