
const getPricePromise = async () => {
  const purchasesResponse = await fetch('/api/purchases');
  const purchases = await purchasesResponse.json();
  return purchases;
  // return await (await fetch('https://api.coinbase.com/v2/prices/BTC-USD/sell')).json();
};

export { getPricePromise };