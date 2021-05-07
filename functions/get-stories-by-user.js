const Query = require("./utils/query")

const GET_STORIES_BY_USER_ID = `
    query($userID:String!){
      getStoriesByUserID(userID:$userID){
        data{
          userID
          _id
          title
          read
          url
          note
          image
          description
          columnIndex
        }
      }
    }
`

exports.handler = async event => {
  const userID = event.queryStringParameters.userID

  const { data, errors } = await Query(GET_STORIES_BY_USER_ID, {
    userID,
  })

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ stories: data.getStoriesByUserID.data }),
  }
}
