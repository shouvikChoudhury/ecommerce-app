import React from 'react'
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { useSelector } from 'react-redux'

const HeadNav = () => {
    const cartItem = useSelector((state) => state.cartlist)
    const total = cartItem.reduce((prev, item) => {
        return prev + (item.price * item.counts)
    }, 0)
    const totQuant = cartItem.reduce((prev, item) => {
        return prev + item.counts
    }, 0)

    return (
        <nav className='sticky-top d-flex justify-content-around breadcrumb'>
            <ul><Link to="/home"><b>Home</b></Link></ul>
            <ul><Link to="/shop"><b>Shop</b></Link></ul>
            <ul><Link to="/cart"><b>Cart</b></Link></ul>
            <ul><Link to="/cart"><BsCartFill /><span className='pl-2'><i><b>Total: {total.toFixed(2)} INR ({totQuant} item)</b></i></span></Link></ul>
        </nav>
    )
}

export default HeadNav