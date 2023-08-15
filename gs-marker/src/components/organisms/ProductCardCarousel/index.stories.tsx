import { Meta } from '@storybook/react';
import ProductCard from './../ProductCard/index';
import ProductCardCarousel from './index';

export default { title: 'Organisms/ProductCardCarousel' } as Meta<
    typeof ProductCardCarousel
>;

export const Standard = () => (
    <ProductCardCarousel>
        <ProductCard
            title={'shoes 1'}
            price={2000}
            imageUrl={'/images/sample/1.jpg'}
        ></ProductCard>
        <ProductCard
            title={'shoes 2'}
            price={2000}
            imageUrl={'/images/sample/2.jpg'}
        ></ProductCard>
        <ProductCard
            title={'shoes 3'}
            price={2000}
            imageUrl={'/images/sample/3.jpg'}
        ></ProductCard>
        <ProductCard
            title={'shoes 4'}
            price={2000}
            imageUrl={'/images/sample/4.jpg'}
        ></ProductCard>
        <ProductCard
            title={'shoes 5'}
            price={2000}
            imageUrl={'/images/sample/5.jpg'}
        ></ProductCard>
        <ProductCard
            title={'shoes 6'}
            price={2000}
            imageUrl={'/images/sample/6.jpg'}
        ></ProductCard>
        <ProductCard
            title={'shoes 7'}
            price={2000}
            imageUrl={'/images/sample/7.jpg'}
        ></ProductCard>
    </ProductCardCarousel>
);
