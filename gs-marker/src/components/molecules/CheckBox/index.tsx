import React, { useRef, useState, useCallback, useEffect } from 'react';
import Styled from 'styled-components';
import {
    CheckBoxOutlineBlankIcon,
    CheckBoxIcon,
} from './../../atoms/IconButton';
import Text from './../../atoms/Text';
import Flex from './../../layout/Flex';

export interface CheckBoxProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue'> {
    label?: string;
}

const CheckBoxElement = Styled.input`
    display: none;
`;

const Label = Styled.label`
    cursor: pointer;
    margin-left: 6px;
    user-select: none;
`;

const CheckBox = (props: CheckBoxProps) => {
    const { id, label, onChange, checked, ...rest } = props;
    const [isChecked, setIsChecked] = useState(checked);
    const ref = useRef<HTMLInputElement>(null);
    const onClick = useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();
            ref.current?.click();
            setIsChecked((isChecked) => !isChecked);
        },
        [ref, setIsChecked],
    );

    useEffect(() => {
        setIsChecked(checked ?? false);
    }, [checked]);

    return (
        <>
            <CheckBoxElement
                {...rest}
                ref={ref}
                type="checkbox"
                checked={isChecked}
                readOnly={!onChange}
                onChange={onChange}
            />
            <Flex alignItems="center">
                {/* ON/OFF */}
                {checked ?? isChecked ? (
                    <CheckBoxIcon size={20} onClick={onClick} />
                ) : (
                    <CheckBoxOutlineBlankIcon size={20} onClick={onClick} />
                )}
                {/* checkbox label */}
                {label && label.length > 0 && (
                    <Label htmlFor={id} onClick={onClick}>
                        <Text>{label}</Text>
                    </Label>
                )}
            </Flex>
        </>
    );
};

export default CheckBox;
