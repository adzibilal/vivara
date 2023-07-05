import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import products, { Product } from '@/constants/productsData'
const formatPrice = (price: number): string => {
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    })

    return formatter.format(price)
}
const HomeProduct = () => {
    return (
        <div className='product-container w-full mt-20 mb-20'>
            <div className='flex justify-between items-center'>
                <h1 className='text-left text-2xl font-bold'>Our Collection</h1>
                <p className='font-semibold text-red-700 cursor-pointer'>
                    Lihat Semua
                </p>
            </div>

            <div className='grid-product grid grid-cols-1 gap-4 md:grid-cols-4 mt-10'>
                {products.map((product: Product) => (
                    <Link href={`/product/${product.id}`} key={product.id}>
                        <div className='item-product mb-4 cursor-pointer'>
                            <Image
                                className='w-full'
                                src={`/design/${product.img}`}
                                alt={product.name}
                                width={400}
                                height={400}
                            />
                            <div className='title-product'>{product.name}</div>
                            <div className='price-product text-xl font-semibold text-red-700'>
                                {formatPrice(product.price)}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default HomeProduct
