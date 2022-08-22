import style from './TopNav.module.scss';
import { useLocation, Link } from 'react-router-dom';
import classNames from 'classnames';
import { Page } from 'types/Page';
import pagesList from 'data/pages.json';

export default function TopNav(){

    const location = useLocation();
    const pages : Page[] = pagesList;

    return (
        <nav className={style.menu}>
            <ul className={style.menu__list}>
                {pages.map((page, index) => (
                    <li key={index}>
                        <Link 
                            className={classNames({
                                [style.menu__list__item] : true,
                                [style['menu__list__item--selected']] : page.to === location.pathname
                            })} 
                            to={page.to}
                        >
                            {page.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}