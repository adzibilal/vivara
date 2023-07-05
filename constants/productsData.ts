export interface Product {
    id: string;
    name: string;
    price: number;
    img: string;
}

const products: Product[] = [
    {
        id: 'OV001',
        name: 'Holy Child Oversized',
        price: 99000,
        img: 'holy-child.png'
    },
    {
        id: 'OV002',
        name: 'Cry Baby Oversized',
        price: 99000,
        img: 'cry-baby.png'
    },
    {
        id: 'OV003',
        name: 'Get Lost Oversized',
        price: 99000,
        img: 'getlost-mockup.png'
    },
    {
        id: 'OV004',
        name: 'Heartless Oversized',
        price: 99000,
        img: 'HEARTLESS.png'
    },
    {
        id: 'OV005',
        name: 'Vivara Article 1 Oversized',
        price: 99000,
        img: 'vivara1-mockup.png'
    },
    {
        id: 'OV006',
        name: 'Zero To Hero Oversized',
        price: 99000,
        img: 'zerotohero.png'
    },
];

export default products;
