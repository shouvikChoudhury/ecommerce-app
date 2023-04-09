import React, { useEffect, useState } from 'react'
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Productshow from './Productshow';
import useFetch from './useFetch';

const Home = () => {
    const { products } = useFetch('https://fakestoreapi.com/products')

    return (
        <div className="container pt-3">
            <NotificationContainer />
            <h5 className="text-uppercase">men's clothing</h5>
            {products.map((item) => {
                if (item.category == "men's clothing") {
                    return (
                        <Productshow id={item.id}
                            category={item.category}
                            image={item.image}
                            price={item.price}
                            title={item.title}
                            description={item.description}
                            rating={item.rating.rate}
                            counting={item.rating.count} />
                    )
                }

            })}
            <h5 className="text-uppercase">electronics</h5>
            {products.map((item) => {
                if (item.category == "electronics") {
                    return (
                        <Productshow id={item.id}
                            image={item.image}
                            price={item.price}
                            title={item.title}
                            description={item.description}
                            rating={item.rating.rate}
                            counting={item.rating.count} />
                    )
                }

            })}
            <h5 className="text-uppercase">jewelery</h5>
            {products.map((item) => {
                if (item.category == "jewelery") {
                    return (
                        <Productshow id={item.id}
                            image={item.image}
                            price={item.price}
                            title={item.title}
                            description={item.description}
                            rating={item.rating.rate}
                            counting={item.rating.count} />
                    )
                }

            })}
            <h5 className="text-uppercase">women's clothing</h5>
            {products.map((item) => {
                if (item.category == "women's clothing") {
                    return (
                        <Productshow id={item.id}
                            image={item.image}
                            price={item.price}
                            title={item.title}
                            description={item.description}
                            rating={item.rating.rate}
                            counting={item.rating.count} />
                    )
                }

            })}
        </div>
    )
}

export default Home