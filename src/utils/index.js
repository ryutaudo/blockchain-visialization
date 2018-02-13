const getPricePromise = async () => {
  const price = await (await fetch('https://api.coinbase.com/v2/prices/:currency_pair/sell')).json();
  console.log(price);
};

export { getPricePromise };