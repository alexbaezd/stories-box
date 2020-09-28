import React from "react"
import ContentLoader from "react-content-loader"

export const MyLoaderText = () => (
  <ContentLoader
    speed={2}
    width="100%"
    height={220}
    viewBox="0 0 476 220"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="5" rx="3" ry="3" width="230" height="16" />
    <rect x="-1" y="39" rx="3" ry="3" width="52" height="6" />
    <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
    <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
    <rect x="2" y="110" rx="3" ry="3" width="178" height="6" />
    <rect x="1" y="94" rx="3" ry="3" width="334" height="5" />
    <rect x="323" y="151" rx="0" ry="0" width="68" height="29" />
    <rect x="238" y="152" rx="0" ry="0" width="68" height="29" />
    <rect x="156" y="153" rx="0" ry="0" width="68" height="29" />
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

