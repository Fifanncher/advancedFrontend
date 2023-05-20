import {memo, useCallback} from 'react';
import {classNames as cn} from 'shared/lib/classNames/classNames';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import {Button, ButtonTheme} from '../Button/Button';
import s from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo(({className, text}: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={cn(s.code, {}, [className])}>
      <Button onClick={onCopy} className={s.copyBtn} theme={ButtonTheme.CLEAR}>
        <CopyIcon />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
