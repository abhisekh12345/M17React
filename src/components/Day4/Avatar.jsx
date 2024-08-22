import React from 'react'

const Avatar = (props) => {
  return (
      <>
         <img className="circle-img" src={props.imgUrl} alt="avatar_img" />
      </>
  )
}

export default Avatar