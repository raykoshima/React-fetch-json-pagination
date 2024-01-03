import React, { useEffect, useState } from "react";

function ProductList(props){
    const {searchText} = props
    const [product,setProduct] = useState({})
    const [currentPage, setCurrentPage] = useState(1);
    const [currentSeachText,setCurrentSeachText] = useState('');

    useEffect(() => {
        const fetchData = async () => {
          const skip = (currentPage - 1) * 10;
          const limit = 10;
    
          try {
            const response = await fetch(
              `https://dummyjson.com/products/search?q=${searchText}&skip=${skip}&limit=${limit}`
            );
            const json = await response.json();
            setCurrentSeachText(searchText);
            if(currentSeachText !== searchText){
                setCurrentPage(1);
            }
            setProduct(json);
            
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };

    
        fetchData();
      }, [searchText, currentPage]);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
      };
    
      const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
      };
    
    
    return(
        <div className="product-list">
            {product.products && product.products.length > 0 ? (
                <ul>
                    {product.products.map((row) => (
                        <li key={row.id}>
                            <label className="producttitle">{row.id}. {row.title} </label> <label className="price">{row.category} | ${row.price}</label>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No more data to display.</p>
            )}<br/>
            <div>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Previous Page
                </button>
                <span> {currentPage} </span>
                <button onClick={handleNextPage}>Next Page</button>
            </div>
        </div>
        
    )
}

export default ProductList