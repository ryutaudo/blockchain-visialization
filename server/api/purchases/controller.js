import db from '../../db/index'

const send = (res, code, data, json = true) => {
  res.status(code).send(json ? JSON.stringify(data) : data);
};

const getPurchases = async (req, res) => {
  const purhcases = await db.select().table('purchases');
  send(res, 200, purhcases, false)
}

export { getPurchases };
