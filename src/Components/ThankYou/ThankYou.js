import React, { useEffect, useState } from 'react';
import { useStateValue } from '../StateProvider/StateProvider';
import {db} from '../../firebaseConfig';
import ItemList from '../ItemList/ItemList';
import OrderList from '../OrderList/OrderList';


const ThankYou = () => {
    const [order,setOrder] = useState([])
    const [{basket,user},dispatch] = useStateValue(); 
    useEffect(() =>{
        if(user){
            db
        .collection("users")
        .doc(user?.uid)
        .collection('orders')
        .orderBy("timestamp","desc")
        .onSnapshot(snapshot =>(
            setOrder(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        ))
        }
        else{
            setOrder([])
        }


    },[])
    return (
        <div>
             <h1>Thank you For Purchasing</h1>
            {order.map(order=><OrderList order={order} ></OrderList>)}
        </div>
    );
};

export default ThankYou;