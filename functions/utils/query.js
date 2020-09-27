//require("dotenv").config();

const axios = require("axios");

module.exports = async (query, variables) => {
  //TODO: create function
  const result = await axios({
    url: "https://graphql.fauna.com/graphql",
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_API_SECRET}`,
    },
    data: {
      query,
      variables,
    },
  })
  return result.data;
}