import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID FkPgsNchDpcOMVmJ-NYdD9z0AtDEenqXCtcSI4DpHrA'
    },
    params: {
      query: term,
    }
  })
  return response.data.results;
}

export default searchImages;