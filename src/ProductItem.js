import { useParams } from "react-router-dom"
import productsData from "./productsData"

export default function ProductItem () {
    const params = useParams()
    console.log(params.productID)
    const product = productsData.find(product => product.id === params.productID)
    return (
        <div className="product_item">
            {product !== undefined ? `${product.name}  $${product.price} ${product.description}` : `not found`}
        </div>
    )

}