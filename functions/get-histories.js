const Query = require("./utils/query")

const GET_HISTORIES = `
  query {
    allHistories {
      data {
        _id
        title
        read
        url
      }
    }
  }
`

exports.handler = async () =>{

  const { data, errors } = await Query(GET_HISTORIES)

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ histories: data.allHistories.data}),
  }

}