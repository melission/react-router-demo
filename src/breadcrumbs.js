import Breadcrumb from 'react-bootstrap/Breadcrumb';

const BreadcrumbProduct = ({product}) => {

    // let currentId = product.id

    // console.log(product)

    return (
        <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href={`/products`}>
                Products
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{product}</Breadcrumb.Item>
        </Breadcrumb>
    );
}

const BreadcrumbCategory = ({}) => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href={`/category`}>
                Category
            </Breadcrumb.Item>
        </Breadcrumb>
    )
}

export {BreadcrumbProduct, BreadcrumbCategory};