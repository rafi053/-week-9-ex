import React, { useEffect } from 'react'

import './ImageDetails.css'
import { Image } from '../../types/Image'





interface ImageDetailsProps {
  image: Image
  onClose: () => void
  handelLike: (imageId: string) => void
}

const ImageDetails: React.FC<ImageDetailsProps> = ({ image, onClose, handelLike }) => {


  const imageRef = React.useRef<HTMLDivElement | null>(null)


  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }


  const clickOutSide = (e: MouseEvent) => {
    if (imageRef.current && !imageRef.current.contains(e.target as Node)) {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscape)
    document.addEventListener('mousedown', clickOutSide)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', clickOutSide)
    }

  }, [])


  return (
    <div className='ImageDetails'>
      <div className='modal' ref={imageRef}>
        <div className='content'>
          <img className='image' src={image.urls.regular} alt={image.alt_description} />
          <div className='info'>
              <h2>{image.user.name}</h2>
              <p>{image.description}</p>
              <button onClick={(e: React.MouseEvent<HTMLButtonElement>) =>{e.stopPropagation(); handelLike(image.id)}}>
          <span className='like'>💰</span>
          <span className='likes'>{image.likes}</span>
          </button>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default ImageDetails
