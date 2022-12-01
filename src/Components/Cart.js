import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCart } from '../Store/reduxToolkit'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const Cart = () => {
    const mycart = useSelector((state) => state.cartlist)
    const dispatch = useDispatch()

    return (
        <div className="container ">
            <NotificationContainer />
            {mycart.length == 0 && (<h3 className="d-flex justify-content-center mb-5"><i>Your cart is empty, please add items to cart!</i></h3>)}
            {mycart.map((item) => {
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
                                    <div className="">Title: {item.title}</div>
                                    <div className=""><b>Price: {item.price} INR</b></div>
                                    <div className=""><i>{item.description}</i></div>
                                    <div className=""><i><b>Quantity: {item.counts}</b></i></div>
                                    <button className="mt-3 pl-5 pr-5 btn-danger" onClick={(e) => {
                                        NotificationManager.info('Product removed from cart', 'Warning!', 1500);
                                        dispatch(removeCart(item.id))
                                    }}>Remove from cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            <button className="mb-5 btn-block" ><b>Continue to checkout</b></button>
        </div>
    )
}

export default Cart