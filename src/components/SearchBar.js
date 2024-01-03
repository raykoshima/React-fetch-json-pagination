import React, { useEffect, useState } from "react";

function SearchBar(props){
    const {setSearchText} = props
    const [input,setInput] = useState('')
    
    // useEffect( ()=>{
    //     console.log(searchText)
    // })
    useEffect( () =>{
        let timer = setTimeout(() => {
            setSearchText(input)
        }, 1000);
        return () => clearTimeout(timer)
    },[input])
    return(
        <div className="search-bar">
            <input type="text" placeholder="I think I might want a..." value={input} onChange={e => (setInput(e.target.value))}/>
        </div>
    )
}
export default SearchBar