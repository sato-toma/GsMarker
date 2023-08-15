import { Meta } from '@storybook/react';
import GlobalSpinnerContextProvider, {
    useGlobalSpinnerActionsContext,
} from './../../../contexts/GlobalSpinnerContext';
import Button from './../../atoms/Button';
import GlobalSpinner from './index';

export default {
    title: 'organisms/GlobalSpinner',
} as Meta<typeof GlobalSpinner>;

export const WithContextProvider = () => {
    const ChildComponent = () => {
        const setGlobalSpinner = useGlobalSpinnerActionsContext();
        const handleClick = () => {
            setGlobalSpinner(true);
            setTimeout(() => {
                setGlobalSpinner(false);
            }, 3000);
        };

        return (
            <>
                <GlobalSpinner />
                <Button onClick={handleClick}>show global spiner</Button>
            </>
        );
    };

    return (
        <GlobalSpinnerContextProvider>
            <ChildComponent />
        </GlobalSpinnerContextProvider>
    );
};
