function ttc(price, tva = 0.2) {
  if (isNaN(parseFloat(price)) || isNaN(parseFloat(tva))) {
    return "Error number price value";
  }

  return Math.floor(price * (1 + tva) * 100) / 100;
}

const phones = [
  { name: "iphone XX", priceHT: 900 },
  { name: "iphone X", priceHT: 700 },
  { name: "iphone B", priceHT: 200 },
];

const result = phones.map((e) => ({ ...e, priceTTC: ttc(e.priceHT) }));

console.log(result);
