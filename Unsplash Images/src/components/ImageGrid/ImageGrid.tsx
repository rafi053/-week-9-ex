import React from 'react'
import { Image } from '../../types/Image'
import ImageCard from '../ImageCard/ImageCard'

import './ImageGrid.css'


interface ImageGridProps {
    images: Image[]
    handelLike: (imageId: string) => void
    handelImageClick: (image: Image) => void
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, handelLike, handelImageClick }) => {
  return (
    <div className='ImageGrid'>
      {images.map((image) => {
        return (
        <ImageCard key={image.id} image={image}  handelLike={handelLike} handelImageClick={handelImageClick}/>
        )
      })}
    </div>
  )
}

export default ImageGrid
