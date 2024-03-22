import React, { useEffect, useState } from 'react'
import style from "./Fetchdata.module.css"
import axios from "axios"

const Fetch = () => {
    // let [product,setProducts]=useState("")
    const [data,setData] =useState(null)
    useEffect(()=>{
       
        axios.get("https://api.buylowcal.com/products")
        .then((res)=>{setData(res.data.data)})
        .catch(()=>{console.log("errrrrrrrr")})
    },[])

   if(!data) return "loading"


  return (
    <div id={style.mainPage}>
    
        
        {data.map(product => (
          <ul>
          <li key={product.id}>
             <img src={product.image.thumbnail} alt={product.name} />
            <h2>{product.id}</h2>
            <h2>{product.name}</h2>
            <h2>{product.slug}</h2>
            <h3>{product.type_id}</h3>
            <p>Price: ${product.price}</p>
            <h3>{product.shop_id}</h3>
            <p>Description: {product.description}</p>
            
          </li>
          </ul>
        ))}
      
    </div>
  )
}

export default Fetch





