import React, {ReactNode, useCallback, useEffect} from 'react';
import {classNames as cn} from 'shared/lib/classNames/classNames';
import {Portal} from '../Portal/Portal';
import s from './Modal.module.scss';

export interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose
  } = props;

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div className={cn(s.Modal, {[s.opened]: isOpen}, [className])}>
        <div className={s.overlay} onClick={closeHandler}>
          <div className={cn(s.content, {[s.contentOpened]: isOpen})} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
