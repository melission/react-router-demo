import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

const BreadcrumbProduct = ({ product }) => {

    // let currentId = product.id

    // console.log(product)

    return (
        <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item >
                <Link to={`/products`}>Products</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{product}</Breadcrumb.Item>
        </Breadcrumb>
    );
}

const BreadcrumbCategory = ({ book }) => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item >
                <Link to={`/category`}>Category</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{book}</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export { BreadcrumbProduct, BreadcrumbCategory };