import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Button from '../../atoms/MyButton';
import GlobalSpinnerContextProvider, { useGlobalSpinnerActionsContext } from './../../../contexts/GlobalSpinnerContext';
import GlobalSpinner from './index';

export default {
  title: 'organisms/GlobalSpinner',
} as ComponentMeta<typeof GlobalSpinner>;

export const WithContextProvider = () => {
  const ChildComponent = () => {
    const setGlobalSpinner = useGlobalSpinnerActionsContext();
    const handleClick = () => {
      setGlobalSpinner(true);
      // 5秒後に閉じる
      setTimeout(() => {
        setGlobalSpinner(false);
      }, 5000);
    };

    return (
      <>
        <GlobalSpinner />
        <Button onClick={handleClick}>スピナー表示</Button>
      </>
    );
  };

  return (
    <GlobalSpinnerContextProvider>
      <ChildComponent />
    </GlobalSpinnerContextProvider>
  );
};
