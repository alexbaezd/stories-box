const Query = require("./utils/query")

const DELETE_STORY = `
mutation($id:ID!){
  deleteStory(id:$id){
    _id
  }
}
`

exports.handler = async event => {
  const { id } = JSON.parse(event.body)
  const { data, errors } = await Query(DELETE_STORY, { id })

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ deleteStory: data.deleteStory }),
  }
}
