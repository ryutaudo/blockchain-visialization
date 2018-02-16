import db from '../../db/index'

const send = (res, code, data, json = true) => {
  res.status(code).send(json ? JSON.stringify(data) : data);
};

const getPurchases = async (req, res) => {
  const purchases = await db
  .table('purchases')
  .orderBy('id')
  .select();
  send(res, 200, purchases, false)
}

const addPurchase = async (req, res) => {
  const newPurchase = req.body;
  const result = await db.insert(newPurchase).into('purchases');
  send(res, 200, result, false);
}

const updatePurchase = async (req, res) => {
  const newPurchase = req.body;
  const { id } = req.params;
  const updateResult = await db
    .table('purchases')
    .where({ id })
    .update(newPurchase);
  send(res, 200, updateResult, false);
}

const deletePurchase = async (req, res) => {
  const { id } = req.params;
  const deleteResult = await db
    .table('purchases')
    .where({ id })
    .delete();
  send(res, 200, updateResult, false);
}

export { getPurchases, addPurchase, updatePurchase, deletePurchase };
