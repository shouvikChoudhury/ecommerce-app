import React, { useState, useEffect } from 'react'
import { BsSearch } from "react-icons/bs";
import { useDispatch } from 'react-redux'
import { addCart } from '../Store/reduxToolkit'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import useFetch from './useFetch';

const Shop = () => {
    const [search, setSearch] = useState('')
    const [selectd, setselectd] = useState("MEN'S CLOTHING")
    const dispatch = useDispatch()

    const { products } = useFetch('https://fakestoreapi.com/products')

    const selectdProduct = products.filter(i =>
        i.category.toLowerCase() === selectd.toLowerCase()
    )
    const searchProduct = products.filter(i =>
        i.title.toLowerCase().includes(search.toLowerCase())
    )
    const allProduct = selectdProduct.filter(x => searchProduct.includes(x))

    return (
        <div className="container ">
            <NotificationContainer />
            <div className='row pt-3'>
                <div className="d-flex justify-content-center col-lg-6 mb-3">
                    <h4>Filter by Category</h4>
                    <select value={selectd} onChange={e => { setselectd(e.target.value) }}>
                        <option value="men's clothing">MEN'S CLOTHING</option>
                        <option value="electronics">ELECTRONICS</option>
                        <option value="jewelery">JEWELERY</option>
                        <option value="women's clothing">Women's CLOTHING</option>
                    </select>
                </div>
                <div className='d-flex justify-content-center col-lg-6 mb-3'>
                    <h4>Search by Title</h4>
                    <form>
                        <input type="text" className="pr-5" placeholder="Search" onChange={e => { setSearch(e.target.value) }} />
                    </form>
                    <BsSearch className='ml-2 mt-2' />
                </div>
            </div>
            {allProduct.map((item) => {
                return (
                    <div className="p-4" key={item.id}>
                        <div className="card ">
                            <div className="row card-body">
                                <div className="image col-5">
                                    <img style={{ width: "50%" }}
                                        className="picture"
                                        src={item.image}
                                        alt="product"
                                    />
                                </div>
                                <div className="details col-7">
                                    <div className="text-uppercase">Category: <i>{item.category}</i></div>
                                    <div className=""><b>Title: {item.title}</b></div>
                                    <div className=""><i>{item.description}</i></div>
                                    <div className=""><b>Price: {item.price} INR</b></div>
                                    <div className="">Rating: {item.rating.rate} (Reviewed by {item.rating.count} people)</div>
                                    <button className="mt-4 pl-5 pr-5 btn-primary" onClick={(e) => {
                                        NotificationManager.success('Product added to cart', 'Success!', 1000);
                                        dispatch(addCart(item))
                                    }}>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Shop