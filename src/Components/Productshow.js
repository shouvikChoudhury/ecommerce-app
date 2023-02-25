import React from 'react'
import { addCart } from '../Store/reduxToolkit'
import { useDispatch } from 'react-redux'
import { NotificationManager } from 'react-notifications';
import { useNavigate } from 'react-router-dom'

const Productshow = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div className="p-4" key={props.id}>
            <div className="card " onClick={e => navigate(`/home/prod?image=${props.image}
            &category=${props.category}
            &title=${props.title}
            &description=${props.description}
            &price=${props.price}
            &rating=${props.rating}
            &counting=${props.counting}
            &id=${props.id}`)}>
                <div className="row card-body">
                    <div className="image col-5">
                        <img style={{ width: "50%" }}
                            className="picture"
                            src={props.image}
                            alt="product"
                        />
                    </div>
                    <div className="details col-7">
                        <div className="text-uppercase"><i>Title: {props.title}</i></div>
                        <div className="mt-3 mb-5"><b>Price: {props.price} INR</b></div>

                        <button className="mt-3 pl-5 pr-5 btn-primary" onClick={(e) => {
                            NotificationManager.success('Product added to cart', 'Success!', 1000);
                            dispatch(addCart(props));
                            e.stopPropagation()
                        }}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productshow