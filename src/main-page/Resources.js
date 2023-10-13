import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const ResourceBlock = () => {
    const desc = 'The site was created using following resources: '
    const resourceList = ['https://www.flaticon.com/', 'https://chat.openai.com/']
    return (
        <Container>
            <Row>
                {desc}
            </Row>
            <Row>
                <ul>
                    {resourceList.map((resource) => (
                        <li>{resource}</li>
                    ))}
                </ul>
            </Row>
        </Container>
    )
}

export default ResourceBlock