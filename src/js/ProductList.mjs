import { renderListWithTemplate } from "./utils.mjs";


export function productCardTemplate(product){
  return `
    <li class="product-card">
      <a href="product_pages/?product=${product.Id}">
        <img
          src="${product.Image}"
          alt="${product.NameWithoutBrand}"
        />
        <h3 class="card__brand">${product.Brand.Name}</h3>
        <h2 class="card__name">${product.NameWithoutBrand}</h2>
        <p class="product-card__price">$${product.FinalPrice.toFixed(2)}</p>
      </a>
    </li>
  `;
}
export default class ProductListing{
    constructor(category, dataSource, listElement){
        this.category = category
        this.dataSource = dataSource
        this.listElement = listElement
        this.targetIDs = ["344YJ", "985PR", "985RF", "880RR"];
    }
    async init(){
        const list = await this.dataSource.getData();
        // this.renderList(list)
        const filteredList = this.filterProducts(list);
        this.renderList(filteredList);
    }
    filterProducts(list) {
      return list.filter((product) => this.targetIDs.includes(product.Id));
  }
    renderList(list) {
      renderListWithTemplate(productCardTemplate, this.listElement, list);
      }
}