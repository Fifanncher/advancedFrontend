import React, {InputHTMLAttributes, memo, useEffect} from 'react';
import {classNames as cn} from 'shared/lib/classNames/classNames';
import s from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  title?: string;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    title,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  console.log('otherProps', otherProps);

  return (
    <div className={cn(s.InputWrapper, {}, [className])}>
      {
        title ? (
          <div className={s.title}>
            {`${title}>`}
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
