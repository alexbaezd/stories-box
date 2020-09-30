const Query = require("./utils/query")
const ogs = require("open-graph-scraper")

const GET_HISTORIES = `
  query {
    allHistories {
      data {
        _id
        title
        read
        url
      }
    }
  }
`

exports.handler = async () => {
  const { data, errors } = await Query(GET_HISTORIES)

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    }
  }

  const getMeta = async (url) =>{
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

  const tmp = data.allHistories.data

  let dataTmp = await Promise.all(
    tmp.map(async (history) => {
      return {
        ...history,
        metadata: await getMeta(history.url),
      }
    })
  ) 


  console.log(dataTmp)

  const d = await getMeta(
    "https://www.gatsbyjs.com/docs/resource-handling-and-service-workers/#offline-plugin-gatsby-plugin-offline"
  )
  console.log("D",d)
  return {
    statusCode: 200,
    body: JSON.stringify({ histories: data.allHistories.data }),
  }
}
