import { useState } from "react";
import "./App.css";
import axios from "axios";
import Gallery from "./Gallery";
function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      );
      setData(response.data.photos.photo);
      console.log(response.data.photos.photo);
    } catch (err) {
      console.log(err);
    }
    setSearch("");
  };

  return (
    <div className="app">
      <h2>Images Gallery</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={search}
          placeholder="Search Images"
          className=""
          onChange={changeHandler}
        />
        <input type="submit" name="Search" className="search-btn" />
      </form>

      {data.length >= 1 ? <Gallery data={data} /> : <h1>No images loaded</h1>}
    </div>
  );
}

export default App;
