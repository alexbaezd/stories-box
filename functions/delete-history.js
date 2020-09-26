const Query = require("./utils/query")

const DELETE_HISTORY = `
mutation($id:ID!){
  deleteHistory(id:$id){
    _id
  }
}
`

exports.handler = async event => {
  const { id } = JSON.parse(event.body)
  const { data, errors } = await Query(DELETE_HISTORY, { id })

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    }
  }
 
  return {
    statusCode: 200,
    body: JSON.stringify({ deleteHistory: data.deleteHistory }),
  }
}
