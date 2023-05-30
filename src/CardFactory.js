import React from "react";
import Card from 'react-bootstrap/Card';
import "./styles.css"

const ShortDescription = ({ product }) => {
    let text = product.description
    console.log(typeof text.length)
    if (text.length > 100) {        
        console.log("yes")
        return text.slice(0, 100)

    } else {
        console.log("no")
        return text
    }
}

//
const CatalogList = ({catalogList}) => {
    
    const linkCatalog = catalogList.map((catalogEntry) => {
        return (
            <Card className="card-body" border="light">
                <Card.Body>
                    <Card.Title>{catalogEntry}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Card.Link href={`/${catalogEntry}`}>See more</Card.Link>                    
                </Card.Footer>
            </Card>
        )
    })
    return linkCatalog
}

const CategoryList = ({categoryList, category}) => {
    console.log(categoryList)
    const linkList = categoryList.map((product) => {
        return (
                <Card className="card-body" border="light" style={{ height: "400px" }}>
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{product.status}</Card.Subtitle>
                        <Card.Text className="card-desc">
                            Here is a quick product description: <ShortDescription product={product} />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Link href={`/${category}}/${product.id}`}>See detailes</Card.Link>
                    </Card.Footer>
              </Card>
        );
    });
    return linkList;
};

const CategoryItem = (categoryItem) => {
    console.log(categoryItem)
    return(
        <Card className="card-body" border="light" style={{ height: "400px" }}>
            <Card.Body>
                <Card.Title>{categoryItem}</Card.Title>
            </Card.Body>
            <Card.Footer>
                <Card.Link href={`/category/${categoryItem.id}/`}>See detailes</Card.Link>
            </Card.Footer>
        </Card>
    )

}

export {CategoryList, CategoryItem, CatalogList};