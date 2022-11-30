import React from 'react'
import { addCart } from '../Store/reduxToolkit'
import { useDispatch } from 'react-redux'
import { NotificationManager } from 'react-notifications';

const Productshow = (props) => {
    const dispatch = useDispatch()

    return (
        <div className="p-4" key={props.id}>
            <div className="card ">
                <div className="row card-body">
                    <div className="image col-5">
                        <img style={{ width: "50%" }}
                            className="picture"
                            src={props.image}
                            alt="product"
                        />
                    </div>
                    <div className="details col-7">
                        <div className=""><b>Title: {props.title}</b></div>
                        <div className=""><i>{props.description}</i></div>
                        <div className=""><b>Price: {props.price} INR</b></div>
                        <div className="">Rating: {props.rating} (Reviewed by {props.counting} people)</div>
                        <button className="mt-3 pl-5 pr-5 btn-primary" onClick={(e) => {
                            NotificationManager.success('Product added to cart', 'Success!', 1000);
                            dispatch(addCart(props))
                        }}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productshow