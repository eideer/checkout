
export const toCents = (price) => price * 100;
export const toPrice = (cents) => cents / 100;

export const total = (price, quantity) => {
  const priceInCents = toCents(price);
  const totalInCents = priceInCents * quantity;

  return toPrice(totalInCents);
};

export const sum = (...prices) => {
  const pricesInCents = prices.map(price => toCents(price));
  const totalsInCents  = pricesInCents.reduce((totals, cents) => {
    return totals + cents;
  }, 0);

  return toPrice(totalsInCents);
};
