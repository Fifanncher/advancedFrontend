import {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {Modal} from 'shared/ui/Modal/Modal';
import s from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
  const {t} = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(s.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={s.links}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {/* eslint-disable-next-line */}
        {t('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam illo facilis aliquam sequi tenetur, commodi autem nostrum asperiores doloribus consectetur optio temporibus ex aperiam corporis, animi eaque, laborum quam. Dignissimos.')}
      </Modal>
    </div>
  );
};
