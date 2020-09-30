const Query = require("./utils/query")

const TOGGLE_HISTORY = `
mutation($id:ID!,$title:String!,$url:String!,$read:Boolean!,$image:String!,$description:String!,$note:String!){
  updateHistory(id:$id, data:{title:$title,url:$url,read:$read,image:$image,description:$description,note:$note}){
    _id
    read
  }
}
`

exports.handler = async event => {
  const {id, title, url,read , image, description, note} = JSON.parse(event.body)
  const { data, errors } = await Query(TOGGLE_HISTORY, {id, title, url,read , image, description,note})

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
