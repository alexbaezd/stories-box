const Query = require("./utils/query")
const ogs = require("open-graph-scraper")

const CREATE_STORY = `
mutation($userID:String!,$title:String!,$url:String!,$note:String!,$description:String!,$image:String!,$siteName:String,$columnIndex:Int!){
  createStory(data:{userID:$userID,title:$title,url:$url,read:false,note:$note,description:$description,image:$image,siteName:$siteName,columnIndex:$columnIndex}){
    _id
    userID
    title
    url
    read
    note
    description
    image
    columnIndex
  }
}
`
const getMeta = async url => {
  const options = {
    url: url,
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
    },
  }
  let resp = await ogs(options)
  return resp.result
}

exports.handler = async event => {
  const { note, url, userID } = JSON.parse(event.body)
  const openGraphData = await getMeta(url)

  const variables = {
    userID,
    note,
    url,
    title: openGraphData.ogTitle,
    description:
      openGraphData.ogDescription === undefined
        ? ""
        : openGraphData.ogDescription,
    image:
      openGraphData.ogImage === undefined
        ? "https://picsum.photos/seed/picsum/420/190*/"
        : openGraphData.ogImage.url,
    siteName:
      openGraphData.ogSiteName === undefined ? "" : openGraphData.ogSiteName,
    columnIndex: 0,
  }

  const { data, errors } = await Query(CREATE_STORY, variables)

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ newStory: data.createStory }),
  }
}
