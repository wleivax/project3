import React from "react";
import "./style.css";

const SearchForm = props => {
  return (
    <form>
      <div className="form-group">
        <label className="BookSearchLabel"><h3>Search For Parks</h3></label>
        <br></br>
        <input className="col-12 form-control"
          value={props.search}
          type="text"
          name="searchPark"
          placeholder="Search for a park by typing the first 4 letters of the park name (Ex: Yellowstone is YELL)"
          onChange={props.handleInputChange} />
      </div>
      <button type="submit" className="submitBtn btn" onClick={props.handleFormSubmit}>
        Submit</button>
    </form>
  )
}

export default SearchForm