import React from "react"
import ContentLoader from "react-content-loader"

export const MyLoaderText = () => (
  <ContentLoader
    speed={2}
    width={350}
    height={190}
    viewBox="0 0 400 190"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="4" y="22" rx="0" ry="0" width="137" height="66" />
    <rect x="171" y="36" rx="0" ry="0" width="162" height="7" />
    <rect x="170" y="53" rx="0" ry="0" width="158" height="6" />
    <rect x="7" y="97" rx="0" ry="0" width="153" height="6" />
    <rect x="5" y="117" rx="0" ry="0" width="324" height="8" />
    <rect x="7" y="137" rx="0" ry="0" width="324" height="8" />
  </ContentLoader>
)


export const MyLoaderImage = () => (
  <ContentLoader
    speed={2}
    width="100%"
    height={190}
    viewBox="0 0 476 220"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="83" y="83" rx="0" ry="0" width="26" height="0" />
    <rect x="2" y="5" rx="0" ry="0" width="470" height="218" />
  </ContentLoader>
)

