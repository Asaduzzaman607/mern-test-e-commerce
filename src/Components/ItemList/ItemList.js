import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ItemList = (props) => {
    const{name,img,seller,price} = props.item
    return (
        <Container className="shop">
        <Row>
            <Col sm={2}>
            <img className="img-fluid" src={img} alt="product"></img>
            </Col>
            <Col sm={10}>
            <h3>{name}</h3>
            <p>by:{seller}</p>
            <p>price: $ {price}</p>
            </Col>
        </Row>
    </Container>
    );
};

export default ItemList;