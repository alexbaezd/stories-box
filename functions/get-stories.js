const Query = require("./utils/query")

const GET_STORIES = `
  query {
    allStories {
      data {
        _id
        title
        read
        url
        note
        image
        description
      }
    }
  }
`

exports.handler = async () =>{

  const { data, errors } = await Query(GET_STORIES)

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ stories: data.allStories.data}),
  }

}