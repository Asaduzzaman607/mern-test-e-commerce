import React from 'react';
import ItemList from '../ItemList/ItemList';

const OrderList = ({order}) => {
    return (
        <div>
        {order.data.basket?.map(item=>(
            <ItemList
            item={item}
            ></ItemList>

        ))}
        </div>
    );
};

export default OrderList;