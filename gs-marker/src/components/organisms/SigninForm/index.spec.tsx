import {
    render,
    act,
    screen,
    fireEvent,
    RenderResult,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from './../../../themes';
import SigninForm from '.';

describe('SigninForm', () => {
    let renderResult: RenderResult;
    let handleSignin: jest.Mock;

    beforeEach(() => {
        handleSignin = jest.fn();
        renderResult = render(
            <ThemeProvider theme={theme}>
                <SigninForm onSignin={handleSignin} />
            </ThemeProvider>,
        );
    });

    afterEach(() => {
        renderResult.unmount();
    });

    it('After entering the user name and password, onSignin is called', async () => {
        await act(async () => {
            const inputUsernameNode = screen.getByPlaceholderText(
                /username/,
            ) as HTMLInputElement;
            fireEvent.change(inputUsernameNode, { target: { value: 'user' } });
            const inputPasswordNode = screen.getByPlaceholderText(
                /password/,
            ) as HTMLInputElement;
            fireEvent.change(inputPasswordNode, {
                target: { value: 'password' },
            });
            fireEvent.click(screen.getByText('sign in'));
        });

        expect(handleSignin).toHaveBeenCalledTimes(1);
    });

    it('If only a user name is entered, onSignin is not called due to a validation error.', async () => {
        await act(async () => {
            const inputUsernameNode = screen.getByPlaceholderText(
                /username/,
            ) as HTMLInputElement;
            fireEvent.change(inputUsernameNode, { target: { value: 'user' } });
            fireEvent.click(screen.getByText('sign in'));
        });

        expect(handleSignin).toHaveBeenCalledTimes(0);
    });
});
