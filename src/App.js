import React , {useState} from "react";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";

function App() {
  const [searchText,setSearchText] = useState('')
  return (
  <><center><br/>
  <h1>Product Search</h1>
  <SearchBar searchText={searchText} setSearchText={setSearchText}/>
  <ProductList searchText={searchText}/>
  <br/><label className="credit">Make By <a href="https://github.com/raykoshima" target="_blank">raykoshima (Supakorn Navamavad)</a> Desigh By ChatGPT</label>
  </center>
  </>
  )
};

export default App;
