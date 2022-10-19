import React, { useState } from "react"
import './search.css'

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null)


  const handleOnChange = (e) => {
    setSearch(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchChange(search)
  }
  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <input type={"text"} placeholder="Input City and Hit Enter" onChange={handleOnChange} />
      </form>
    </>
  );
};

export default Search
