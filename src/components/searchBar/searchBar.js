import './searchBar.css'
import { useState } from "react";

function SearchBar({ termSearch }) {
  // eslint-disable-next-line no-unused-vars
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    termSearch(term);
  }

  const handleChange = (event) => {
    // eslint-disable-next-line no-const-assign
    setTerm(event.target.value);
  }
  return <div className="search-bar">
    <form onSubmit={handleFormSubmit}>
      <label>O que você procura?</label>
      <input value={term} onChange={handleChange} />
    </form>

  </div>
}

export default SearchBar


// const handleClick = () => {
//   onSubmit();
//<button onClick={handleClick}>Buscar</button>
// };