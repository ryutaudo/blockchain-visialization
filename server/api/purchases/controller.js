import db from '../../db/index'

const send = (res, code, data, json = true) => {
  res.status(code).send(json ? JSON.stringify(data) : data);
};

const getPurchases = async (req, res) => {
  const purchases = await db.select().table('purchases');
  send(res, 200, purchases, false)
}

const addPurchase = async (req, res) => {
  const newPurchase = req.body;
  const result = await db.insert(newPurchase).into('purchases');
  send(res, 200, result, false);
}

export { getPurchases, addPurchase };
