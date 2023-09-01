import { Link, Outlet } from "react-router-dom"
import "./Products.css"
import productsData from "./productsData"

export default function Products () {
    return (
        <div className="products">
            <h1>Our flowers</h1>
            <ul>
                {productsData.map((product) => 
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                    </li>
                )}
            </ul>
            <Outlet />
        </div>
    )
}
