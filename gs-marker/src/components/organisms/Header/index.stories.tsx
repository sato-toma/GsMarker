import { Meta } from '@storybook/react';
import React, { useEffect } from 'react';
import { AuthContextProvider } from './../../../contexts/AuthContext';
import {
    ShoppingCartContextProvider,
    useShoppingCartContext,
} from './../../../contexts/ShoppingCartContext';
import Header from './index';

export default { title: 'organisms/Header' } as Meta<typeof Header>;

export const NoLogin = () => <Header />;

export const Login = () => {
    const authUser = {
        id: 1,
        username: 'test user',
        displayName: 'sato toma',
        email: 'test@example.com',
        profileImageUrl: '/images/sample/4.jpg',
        description: 'description',
    };

    const ChildComponent = () => {
        const { addProductToCart } = useShoppingCartContext();

        useEffect(() => {
            addProductToCart({
                id: 1,
                category: 'book',
                title: 'Product title',
                description: '',
                imageUrl: '/images/sample/3.jpg',
                blurDataUrl: '',
                price: 2000,
                condition: 'used',
                owner: authUser,
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        return <Header />;
    };

    return (
        <ShoppingCartContextProvider>
            <AuthContextProvider
                context={{ apiRootUrl: 'https://testurl' }}
                authUser={authUser}
            >
                <ChildComponent />
            </AuthContextProvider>
        </ShoppingCartContextProvider>
    );
};
