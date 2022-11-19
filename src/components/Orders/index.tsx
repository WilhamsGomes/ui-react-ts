import { Container} from './styles';
import { OrdersBoard } from '../OrdersBoard';
import { OrderP } from '../../types/Order';

const orders: OrderP[] = [
    {
        '_id': '6376b7d0ef3a31f65346d920',
        'table': '123',
        'status': 'IN PRODUCTION',
        'products': [
            {
                'product': {
                    'name': 'Pizza quatro queijos',
                    'imagePath': '1668722852153-quatro-queijos.png',
                    'price': 40,
                },
                'quantity': 3,
                '_id': '6376b7d0ef3a31f65346d921'
            },
            {
                'product': {
                    'name': 'Cola cola',
                    'imagePath': '1668723875062-coca-cola.png',
                    'price': 7,
                },
                'quantity': 3,
                '_id': '6376b7d0ef3a31f65346d922'
            }
        ],
    },
];

export function Order(){
    return (
        <Container>
            <OrdersBoard
                icon="⌚"
                title="Fila de espera"
                orders={orders}
            />

            <OrdersBoard
                icon="👨🏻‍🍳"
                title="Em preparação"
                orders={[]}
            />

            <OrdersBoard
                icon="✅"
                title="Pronto"
                orders={[]}
            />
        </Container>
    );
}
