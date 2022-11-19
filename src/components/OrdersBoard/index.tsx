import { useState } from 'react';
import { OrderP } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';

interface OrderBoardProps{
    icon: string;
    title: string;
    orders: OrderP[];
}

export function OrdersBoard({icon, title, orders}: OrderBoardProps){

    const [isModalVisible, setisModalVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<null | OrderP>(null);

    function handleOpenModal(order: OrderP){
        setisModalVisible(true);
        setSelectedOrder(order);
    }

    function handleCloseModal(){
        setisModalVisible(false);
        setSelectedOrder(null);
    }

    return (
        <Board>
            <OrderModal
                visible={isModalVisible}
                order={selectedOrder}
                onClose={handleCloseModal}
            />

            <header>
                <span>{icon}</span>
                <strong>{title}</strong>
                <span>({orders.length})</span>
            </header>

            {orders.length > 0 && (
                <OrdersContainer>
                    {orders.map( (order) => (
                        <button type='button' key={order._id} onClick={() => handleOpenModal(order)}>
                            <strong>Mesa {order.table}</strong>
                            <span>{order.products.length} itens</span>
                        </button>
                    ))}
                </OrdersContainer>
            )}

        </Board>
    );
}
