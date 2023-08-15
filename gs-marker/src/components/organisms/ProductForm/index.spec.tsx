import {
    render,
    act,
    screen,
    fireEvent,
    RenderResult,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from './../../../themes';
import ProductForm from '.';

describe('ProductForm', () => {
    let renderResult: RenderResult;
    let handleProductSave: jest.Mock;
    // test url
    global.URL.createObjectURL = () => 'https://test.com';

    beforeEach(() => {
        // test func
        handleProductSave = jest.fn();
        renderResult = render(
            <ThemeProvider theme={theme}>
                <ProductForm onProductSave={handleProductSave} />
            </ThemeProvider>,
        );
    });

    afterEach(() => {
        renderResult.unmount();
    });

    it('After form entry, onProductSave is called', async () => {
        await act(async () => {
            const element = await screen.findByTestId('dropzone');
            fireEvent.drop(element, {
                dataTransfer: {
                    files: [
                        new File(['(⌐□_□)'], 'chucknorris.png', {
                            type: 'image/png',
                        }),
                    ],
                },
            });

            const inputUsernameNode = screen.getByPlaceholderText(
                /Product Title/,
            ) as HTMLInputElement;
            fireEvent.change(inputUsernameNode, { target: { value: '商品' } });

            const inputPasswordNode = screen.getByPlaceholderText(
                /Best product/,
            ) as HTMLInputElement;
            fireEvent.change(inputPasswordNode, {
                target: { value: 'テストテスト' },
            });

            const inputPriceNode = screen.getByPlaceholderText(
                /88/,
            ) as HTMLInputElement;
            fireEvent.change(inputPriceNode, { target: { value: '100' } });

            fireEvent.click(screen.getByText('exhibiting'));
        });

        expect(handleProductSave).toHaveBeenCalledTimes(1);
    });

    it('If only the product title is entered, onProductSave is not called due to a validation error.', async () => {
        await act(async () => {
            const inputUsernameNode = screen.getByPlaceholderText(
                /Product Title/,
            ) as HTMLInputElement;
            fireEvent.change(inputUsernameNode, { target: { value: '商品' } });

            fireEvent.click(screen.getByText('exhibiting'));
        });

        expect(handleProductSave).toHaveBeenCalledTimes(0);
    });
});
