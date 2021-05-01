const Query = require("./utils/query")

const UPDATE_COLUMN_INDEX = `
mutation($id:ID!,$userID:String!,$title:String!,$url:String!,$read:Boolean!,$image:String!,$description:String!,$note:String!,$columnIndex:Int!){
  updateStory(id:$id, data:{userID:$userID,title:$title,url:$url,read:$read,image:$image,description:$description,note:$note,columnIndex:$columnIndex}){
    _id
    columnIndex
  }
}
`

exports.handler = async event => {
  const {
    id,
    title,
    url,
    read,
    image,
    description,
    note,
    userID,
    columnIndex,
  } = JSON.parse(event.body)

  const { data, errors } = await Query(UPDATE_COLUMN_INDEX, {
    id,
    userID,
    title,
    url,
    read: columnIndex === 2 ? true : false,
    image,
    description,
    note,
    columnIndex,
  })

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ updateStory: data.updateStory }),
  }
}
