import { Outlet, useParams } from "react-router-dom"

export default function Products() {
    return (
        <div>
            <h1>Produts List</h1>
            <p>List of products here</p>
        </div>
    )
}

export function Create() {
    return (
        <div>
            <h1>Create Produt</h1>
            <p>Create product form here</p>
        </div>
    )
}


export function ProductDetail() {
    const { id, name } = useParams();
    return (
        <div>
            <h1>{name},{id}</h1>
            <p>Detail of a Product {name}</p>
        </div>
    )
}

export function ProductLayout() {
    return (
        <div>
            <h1>Product Pages</h1>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
