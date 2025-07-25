import React from 'react'

import "./product.css"
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Product = () => {

                


    const[products, setProducts] = useState([]);
    
     const [loading, setLoading] = useState(true);
 const [error, setError] = useState("");




      useEffect(() => {
         fetch('https://dummyjson.com/products')
         .then ((res) => res.json())
         .then((data) => {
             console.log(data.products);
             setProducts(data.products);
         })
         .catch((err) => console.log(err));
  }, []);
        


   return (
     <div className="product-container">
      {products.length > 0 &&
         products.map((product) => (
             <div className="product-card" key={product.id}>
                  <h1>{product.title}</h1>
                 <img src={product.images[0]} alt={product.title} />
                     <p>{product.description}</p>
               <p>Price: ${product.price}</p>
               
            

            </div>
        ))
     }
    
    </div>
  )
}

export default Product
