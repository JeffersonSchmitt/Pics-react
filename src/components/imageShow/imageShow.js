function ImageShow({ imageItem }) {
  return <div>
    <img alt={imageItem.alt_description} src={imageItem.urls.small}></img>
  </div>
}

export default ImageShow