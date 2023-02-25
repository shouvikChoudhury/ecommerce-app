import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'


const Prod = () => {
    const [params] = useSearchParams()

    return (
        <div className="p-4" key={params.get("id")}>
            <div className="card ">
                <div className="row card-body">
                    <div className="image col-5">
                        <img style={{ width: "50%" }}
                            className="picture"
                            src={params.get("image")}
                            alt="product"
                        />
                    </div>
                    <div className="details col-7">
                        <div className="text-uppercase">Category: {params.get("category")}</div>
                        <div className="mt-3"><b>Title: {params.get("title")}</b></div>
                        <div className="mt-3"><i>Description: {params.get("description")}</i></div>
                        <div className="mt-5"><b>Price: {params.get("price")} INR</b></div>
                        <div className="">Rating: {params.get("rating")} (Reviewed by {params.get("counting")} people)</div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Prod