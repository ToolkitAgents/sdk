export class Agent {
  constructor({ name, targetPrice }) {
    this.name = name;
    this.targetPrice = targetPrice;
  }

  evaluate(product) {
    return product.price <= this.targetPrice && product.available;
  }

  act(product) {
    console.log(
      `[${this.name}] Target met → ${product.title} @ $${product.price}`
    );
  }
}
