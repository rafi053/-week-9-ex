import React, { useRef } from 'react'

import './AddImage.css'
interface AddImageProps {
  createObjImage: (url: string) => void
}

const AddImage: React.FC<AddImageProps> = ({ createObjImage } ) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const saveInput = () => {
  console.log(inputRef.current?.value);
  };


  return (
    <div className='AddImage'>
        <h1> Add Image</h1>
        
            <input type="text" placeholder='Image Url' ref={inputRef}/>
            <button type='button' onClick={saveInput}>Add Image</button>
       

    </div>
   
  )
}

export default AddImage
