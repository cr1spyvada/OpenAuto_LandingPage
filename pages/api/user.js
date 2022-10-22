// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import clientPromise from "../../lib/mongo";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const data = JSON.parse(req.body);
  const payload = { name: data.name, email: data.email };
  const response = await db
    .collection("username")
    .insertOne(payload)
    .then((result) => {
      // res.statusCode = 200;
      return res.status(200).send(result);
    })
    .catch((err) => {
      return res.status(400).send(err);
    });
  return response;
}
