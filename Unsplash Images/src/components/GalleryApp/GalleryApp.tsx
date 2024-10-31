import React, { useEffect } from 'react'
import { Image } from '../../types/Image'
import { fetchImage } from '../../unsplash'
import ImageGrid from '../ImageGrid/ImageGrid'
import ImageDetails from '../ImageDetails/ImageDetails'
import AddImage from '../AddImage/AddImage'
import { v4 as uuidv4 } from "uuid";


const GalleryApp: React.FC = () => {

  const [images, setImages] = React.useState<Image[]>([])
  const [error, setError] = React.useState<string | null>(null)
  const [selectedImage, setSelectedImage] = React.useState<Image | null>(null)


  
     useEffect(() => {
    const loadImages = async () => {
      try {
        const images = await fetchImage()
        setImages(images)
      } catch (error) {
        setError(error as string)
      }
      
    }
    
    loadImages()
  }, [])

  const createObjImage = (url: string) => {
    const image: Image = {
      id: uuidv4(),
      urls: {
        regular: "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&fit=crop&w=1080&q=80&fit=max",
        small: "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&&fm=jpg&w=400&fit=max"
      },
      alt_description: 'bla_bla',
      user: {
        name: 'superuser'
      },
     
      likes: 40,
      description: 'shooks'
    }
    return image
  }

  const handelLike = (imageId: string) => {
      let tempImage = [...images]
      let changedImage = tempImage.find(image => image.id === imageId)
      if (changedImage) {
        changedImage.likes += 1
        setImages([...tempImage])
      }
        
      
    
    }

    const handelImageClick = (image: Image) => {
      setSelectedImage(image)
    }
    
    

  

  
  return (
    <div className='GalleryApp'>
      <header>
        <h1>Gallery App</h1>
      </header>
      <main className='main'>
      {!error && <ImageGrid images={images} handelLike={handelLike} 
       handelImageClick = {handelImageClick}/>
      } 
      {
        selectedImage && <ImageDetails image={selectedImage} handelLike={handelLike} onClose={() => setSelectedImage(null)} />
      }
      <AddImage createObjImage={createObjImage} />

      </main>

    
      
    </div>
  )
}

export default GalleryApp
