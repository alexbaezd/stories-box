const Query = require("./utils/query")

const TOGGLE_HISTORY = `
mutation($id:ID!,$title:String!,$url:String!,$read:Boolean!){
  updateHistory(id:$id, data:{title:$title,url:$url,read:$read}){
    _id
    read
  }
}
`

exports.handler = async event => {
  const {id, title, url,read } = JSON.parse(event.body)
  const { data, errors } = await Query(TOGGLE_HISTORY, {id, title, url,read })

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ updateHistory: data.updateHistory }),
  }
}
