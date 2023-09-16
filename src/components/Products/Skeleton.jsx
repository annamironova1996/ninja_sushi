import React from 'react'
import ContentLoader from "react-content-loader"

const Skeleton = () => {
  return (
    <ContentLoader 
    speed={2}
    width={280}
    height={428}
    viewBox="0 0 280 428"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
   
  >
    <circle cx="135" cy="119" r="119" /> 
    <rect x="0" y="306" rx="14" ry="14" width="277" height="57" /> 
    <rect x="0" y="393" rx="14" ry="14" width="107" height="33" /> 
    <rect x="137" y="388" rx="14" ry="14" width="141" height="39" /> 
    <rect x="0" y="250" rx="14" ry="14" width="280" height="35" />
  </ContentLoader>
  )
}

export default Skeleton