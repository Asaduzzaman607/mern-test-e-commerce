import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ItemList from '../ItemList/ItemList';
import { useStateValue } from '../StateProvider/StateProvider';
import {db} from '../../firebaseConfig';
import firebase from "firebase";
import { Link } from 'react-router-dom';


const FinalOrder = () => {
    const [{basket},dispatch] = useStateValue();
    const[{user},userDispatch] = useStateValue();
    const saveOrder = (event) => {
        event.preventDefault();
        db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(user?.uid)
        .set({
          basket:basket,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
    }
    return (
        <Container>
        <Row>
        <Col sm={2}></Col>
        <Col sm={8}>
        <h1>Hello {user?.userName||user?.displayName}, This is your order</h1>
        {
            basket.map(item=><ItemList item={item} ></ItemList>)
        }
        <button onClick={saveOrder} className="button"><Link style={{textDecoration:'none',color:'white'}} to='/thank-you'>Save Your Order</Link></button>
        </Col>
        <Col sm={2}></Col>
        </Row>
            
        </Container>
    );
};

export default FinalOrder;