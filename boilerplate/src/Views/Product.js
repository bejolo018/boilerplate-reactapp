import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Product() {
    const { id } = useParams()

    const url = `https://5f35c1445b91f60016ca50c1.mockapi.io/products/${id}`

    // Custom Hook for fetching data
    let product = useAxiosGet(url)

    let content = null


    if(product.loading){
        content = <Loader />
    }

    if(product.error){
        content = <h1>There was an error, please refresh or try again later</h1>
    }

    if(product.data){
        return (
        content =
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.name}
                </h1>
                <div>
                    <img
                        src={product.data.images}
                        alt={product.data.name}
                    />
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {product.data.price}
                </div>
                <div>
                    {product.data.description}
                </div>
                
            </div>
        )
    }

    return(
        <div>
            {content}
        </div>
    )
}

export default Product 