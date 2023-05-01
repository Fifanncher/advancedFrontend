import React, {InputHTMLAttributes, memo} from 'react';
import {classNames as cn, Mods} from 'shared/lib/classNames/classNames';
import s from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  label?: string;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    label,
    readonly,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const mods: Mods = {
    [s.readonly]: readonly
  };

  return (
    <div className={cn(s.InputWrapper, mods, [className])}>
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
        readOnly={readonly}
        {...otherProps}
      />
    </div>
  );
});
