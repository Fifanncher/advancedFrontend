import React, {InputHTMLAttributes, memo, useEffect} from 'react';
import {classNames as cn} from 'shared/lib/classNames/classNames';
import s from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    label,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={cn(s.InputWrapper, {}, [className])}>
      {
        label ? (
          <div className={s.label}>
            {`${label}`}
          </div>
        ) : null
      }
      <input
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={s.input}
        {...otherProps}
      />
    </div>
  );
});
