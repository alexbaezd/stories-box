const Query = require("./utils/query")

const CREATE_HISTORY = `
mutation($title:String!,$url:String!){
  createHistory(data:{title:$title,url:$url,read:false}){
    _id
    title
    url
    read
  }
}
`

exports.handler = async (event) => {
  
  const {title,url} = JSON.parse(event.body)
  const { data, errors } = await Query(CREATE_HISTORY,{title,url})

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ newHistory: data.createHistory }),
  }
}
