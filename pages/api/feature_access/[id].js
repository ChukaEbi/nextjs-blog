// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async (req, res) => {
  if (req.method == "GET") {
    const {
      query: { id, user_id, app_id },
    } = req;
    const url = `http://localhost:3001/f/${id}/access?app_id=${app_id}&user_id=${user_id}`
    await axios.get(url).then(({ data }) => {
      res.status(200).json(data);
    })
  }
  if (req.method == "POST") {
    const { user_id, app_id } = JSON.parse(req.body)
    const url = `http://localhost:3001/f/${req.query.id}/give_access?app_id=${app_id}&user_id=${user_id}`
    await axios.get(url).then(({ data }) => {
      res.status(200).json(data);
    })
  }
};
