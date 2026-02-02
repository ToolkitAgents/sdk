import { Toolkit, Agent } from "../src/index.js";

const toolkit = new Toolkit({
  store: "example-shop.myshopify.com"
});

const agent = new Agent({
  name: "AutonomousBuyer-01",
  targetPrice: 50
});

const products = await toolkit.browse({
  limit: 5,
  sort: "price_asc"
});

for (const product of products) {
  if (agent.evaluate(product)) {
    agent.act(product);
  }
}
