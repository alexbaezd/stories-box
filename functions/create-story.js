const Query = require("./utils/query")
const ogs = require("open-graph-scraper")


const CREATE_STORY = `
mutation($title:String!,$url:String!,$note:String!,$description:String!,$image:String!,$siteName:String){
  createStory(data:{title:$title,url:$url,read:false,note:$note,description:$description,image:$image,siteName:$siteName}){
    _id
    title
    url
    read
    note
    description
    image
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

exports.handler = async (event) => {
  const {note,url} = JSON.parse(event.body)
  const openGraphData = await getMeta(url);

  const variables = {
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
  }

  const { data, errors } = await Query(CREATE_STORY,variables)

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
