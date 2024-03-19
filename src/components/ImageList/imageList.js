import './imageList.css'
import ImageShow from '../imageShow/imageShow'

function ImageList({ listImagesProps }) {

  const renderdImages = listImagesProps.map((image) => {
    return <ImageShow key={image.id} imageItem={image} />
  })

  return <div className='image-list'>{renderdImages}</div>
}

export default ImageList