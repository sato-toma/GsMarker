import { render, screen, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import type { User, Product } from 'types';
import { AuthContextProvider } from './../../../contexts/AuthContext';
import { theme } from './../../../themes';
import Header from '.';

jest.mock('contexts/ShoppingCartContext');
// eslint-disable-next-line import/order
import { useShoppingCartContext } from './../../../contexts/ShoppingCartContext';
const { ShoppingCartContextProvider } = jest.requireActual(
    'contexts/ShoppingCartContext',
);

const authUser: User = {
    id: 1,
    username: 'dummy',
    displayName: 'sato toma',
    email: 'test@example.com',
    profileImageUrl: '/images/sample/1.jpg',
    description: '',
};

const product: Product = {
    id: 10,
    category: 'book',
    title: 'Product title',
    description: '',
    imageUrl: '/images/sample/2.jpg',
    blurDataUrl: '',
    price: 2000,
    condition: 'used',
    owner: authUser,
};

describe('Header', () => {
    let renderResult: RenderResult;
    const useShoppingCartContextMock =
        useShoppingCartContext as jest.MockedFunction<
            typeof useShoppingCartContext
        >;

    it('The product exists in the cart.', async () => {
        useShoppingCartContextMock.mockReturnValue({
            cart: [product],
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            addProductToCart: () => {},
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            removeProductFromCart: () => {},
        });

        renderResult = render(
            <ThemeProvider theme={theme}>
                <ShoppingCartContextProvider>
                    <AuthContextProvider
                        authUser={authUser}
                        context={{ apiRootUrl: 'https://testurl' }}
                    >
                        <Header />
                    </AuthContextProvider>
                </ShoppingCartContextProvider>
            </ThemeProvider>,
        );

        expect(screen.getAllByTestId('badge-wrapper').length).toBeGreaterThan(
            0,
        );

        renderResult.unmount();
        useShoppingCartContextMock.mockReset();
    });

    it('unsigned', async () => {
        useShoppingCartContextMock.mockReturnValue({
            cart: [],
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            addProductToCart: () => {},
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            removeProductFromCart: () => {},
        });

        renderResult = render(
            <ThemeProvider theme={theme}>
                <ShoppingCartContextProvider>
                    <AuthContextProvider
                        context={{ apiRootUrl: 'https://testurl' }}
                    >
                        <Header />
                    </AuthContextProvider>
                </ShoppingCartContextProvider>
            </ThemeProvider>,
        );

        expect(screen.queryByTestId('profile-shape-image')).toBeNull();

        expect(screen.queryByTestId('badge-wrapper')).toBeNull();

        renderResult.unmount();
        useShoppingCartContextMock.mockReset();
    });
});
