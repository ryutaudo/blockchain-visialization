const getPricePromise = async () => {
  const purchasesResponse = await fetch('/api/purchases');
  const purchases = await purchasesResponse.json();
  const pricePromises = purchases
  .map(purchase => {    
    return fetch(`https://api.coinbase.com/v2/prices/${purchase.base}-${purchase.currency}/spot?date=${purchase.purchased_at}`);
  })

  const priceResponses = await Promise.all(pricePromises)
  const priceJsonPromises = priceResponses.map(res => res.json());
  const prices = await Promise.all(priceJsonPromises);
  return prices;
};

const savePurchase = (purchase) => {
  fetch('/api/purchases', {
    method: 'POST',
    body: JSON.stringify(purchase), 
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
  });
}

export { getPricePromise, savePurchase };