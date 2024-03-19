import { useState } from "react";
import SearchBar from './components/searchBar/searchBar'
import ImageList from './components/ImageList/imageList'
import searchImages from './data/services/api'

function App() {

  const [images, setImages] = useState([]);


  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  }


  return <div>
    <SearchBar termSearch={handleSubmit} />
    <ImageList listImagesProps={images} />
  </div>
}

export default App