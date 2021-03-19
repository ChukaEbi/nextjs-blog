// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async (req, res) => {
  if (req.method == "GET") {
    const {
      query: { id, user_id, app_id },
    } = req;
    // const url = `http://localhost:3001/e/?app_id=${app_id}&user_id=${user_id}`
    // await axios.get(url).then(({ data }) => {
    //   res.status(200).json(data);
    // })
  }
  if (req.method == "POST") {
    const { external_id, app_id, org_id, email } = JSON.parse(req.body)
    const url = `http://localhost:3001/e/create?app_id=${app_id}`
    await axios.post(url, { user_id: external_id, org_id, email }).then(({ data }) => {
      res.status(200).json(data);
    })
  }
};
