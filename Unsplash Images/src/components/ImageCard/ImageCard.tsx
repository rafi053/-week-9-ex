import React from 'react'
import { Image } from '../../types/Image'

import './ImageCard.css'

interface ImageCardProps {
  image: Image
  handelLike: (imageId: string) => void
  handelImageClick: (image: Image) => void
}


const ImageCard: React.FC<ImageCardProps> = ({ image, handelLike, handelImageClick }) => {
  return (
    <div className='ImageCard' onClick={() => handelImageClick(image)}>
      <img className='image' src={image.urls.small}  />
      <div className='description'>
        <span>{image.user.name}</span>
        <button onClick={(e: React.MouseEvent<HTMLButtonElement>) =>{e.stopPropagation(); handelLike(image.id)}}>
          <span className='like'>💰</span>
          <span className='likes'>{image.likes}</span>
          </button>
          {/* <button onClick={() => handelImageClick(image)}>Details</button> */}
        </div>
      </div>

  )
}

export default ImageCard
