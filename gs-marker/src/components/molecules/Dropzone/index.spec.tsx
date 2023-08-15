import {
    render,
    screen,
    fireEvent,
    RenderResult,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from './../../../themes';
import Dropzone from '.';

describe('Dropzone', () => {
    let renderResult: RenderResult;
    let handleDrop: jest.Mock;

    beforeEach(() => {
        handleDrop = jest.fn();
        renderResult = render(
            <ThemeProvider theme={theme}>
                <Dropzone onDrop={handleDrop} />
            </ThemeProvider>,
        );
    });

    afterEach(() => {
        renderResult.unmount();
    });

    it('onDrop is called when a file is dropped', async () => {
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

        expect(handleDrop).toHaveBeenCalledTimes(1);
    });
});
