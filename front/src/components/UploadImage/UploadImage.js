import { useState } from 'react';
import Button from '@mui/material/Button';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import {Box} from '@material-ui/core'

export default function UploadImage() {
  const [image, setImage] = useState()
  const [cropper, setCropper] = useState()
  const [croppedImage, setCroppedImage] = useState()

  const fileType = 'image.*'

  const hendleChange = event => {
    event.preventDefault()
    const file = event.target.files[0]

    if (file.type.match(fileType)) {
      const reader = new FileReader()
      reader.onload = () => {
        setImage(reader.result)
      }
      reader.readAsDataURL(file)
    } else {
      console.log('Something wrong with type of image')
    }
  }

  const cropImage = () => {
    if (typeof cropper !== "undefined") {
      setCroppedImage(cropper.getCroppedCanvas().toDataURL());
      setImage(null)
    }
  }

  const deleteImage = () => {
    setCroppedImage(null)
    setImage(null)
  }

  return (
    <Box margin={5}>
      {!image &&
        <Button type="submit" variant="contained" component="label">
          Choose image
          <input type='file' name="avatar" hidden onChange={hendleChange} />
        </Button>}
        <Button type="submit" variant="contained" onClick={deleteImage}>Delete image</Button>  

        {image && (
          <Cropper
            src={image}
            onInitialized={instance => setCropper(instance)}
            rotatable={false}
            viewMode={1}
          />
        )}
        {image && 
          <Button type="submit" variant="contained" onClick={cropImage}>Crop</Button>  
        }
    </Box>
  )
}