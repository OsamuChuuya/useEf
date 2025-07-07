import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Cards = ({search}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
        .then(res=>{
            setProducts(res.data.products);
            setLoading(false);
        })
        .catch((err)=>{
            console.error("Ошибка при загрузке данных:", err)
            setLoading(false);
        })
    }, [])
    if(loading) {
        return <div><span className="loading loading-spinner loading-xl"></span></div>
    }
    const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className='w-[875px] h-[1325px] mx-auto flex flex-wrap mt-[40px] gap-1 p-1 border-2'>
        {filteredProducts.slice(0, 9).map((product) => (
            <div key={product.id} className='w-[284px] h-[434px] bg-[#FFFFFF1A] shadow-[0px_3.65px_2.92px_0px_#00000040] p-[18px]'>
                <img src={product.thumbnail} alt={product.title} />
                <p className='mt-[14px] mb-[-20px]'>cotegories</p>
                <p className='text-end mt-[-20px] mb-[10px]'>Rating: {product.rating}</p>
                <h3 className='text-lg font-bold'>{product.title}</h3>
                <p className='font-bold text-[14px] text-end mt-[-10px]'>{product.price}$</p>
                <button className='bg-gradient-to-r from-[#671AE4] to-[#B75CFF] w-[212px] h-[36px] rounded-2xl mt-[10px]'>Buy now</button>
            </div>
             ))}
    </div>
  )
}

export default Cards