import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';
import { useStateValue } from '../StateProvider/StateProvider';


const OrderReview = () => {
    const[{basket},dispatch] = useStateValue();
    return (
        <Container>
            <Row>
                <Col sm={9}>
                {
                    basket.map(data=><Shop data={data} ></Shop> )
                }
                
                </Col>
                <Col sm={3}><Cart></Cart></Col>
            </Row>
        </Container>
    );
};

export default OrderReview;