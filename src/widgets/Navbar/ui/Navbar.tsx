import { classNames as cn } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/Widgets";
import s from "./Navbar.module.scss";

export interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={cn(s.Navbar, {}, [className])}>
        <ThemeSwitcher />
        <div className={s.links}>
            <AppLink
                to={'/'}
                theme={AppLinkTheme.SECONDARY}
                className={s.mainLink}
            >
                Главная
            </AppLink>
            <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>О сайте</AppLink>
        </div>
    </div>
  );
};
