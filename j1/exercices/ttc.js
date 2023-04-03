function ttc(price, tva = 0.2) {
  if (isNaN(parseFloat(price)) || isNaN(parseFloat(tva))) {
    return "Error number price value";
  }

  return Math.floor(price * (1 + tva) * 100) / 100;
}

// console.log(ttc(100, 0.2)); // 120
// console.log(ttc(100.5, 0.2)); // 120.6
