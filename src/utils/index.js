const getPricePromise = async () => {
  return await (await fetch('https://api.coinbase.com/v2/prices/BTC-USD/sell')).json();
};

export { getPricePromise };