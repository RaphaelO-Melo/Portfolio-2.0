import style from './BottomNav.module.scss';
import { useLocation, Link } from 'react-router-dom';
import classNames from 'classnames';
import { Page } from 'types/Page';
import pagesList from 'data/pages.json';
import { RiGitRepositoryFill, RiUserStarFill, RiMailAddFill } from 'react-icons/ri';

export default function BottomNav(){

    const location = useLocation();
    const pages : Page[] = pagesList;

    return (
        <nav className={style.menu}>
            <ul className={style.menu__list}>
                {pages.map((page, index) => (
                    <li className={style.menu__list__wrapper} key={index}>
                        <Link 
                            className={classNames({
                                [style.menu__list__wrapper__item] : true,
                                [style['menu__list__wrapper__item--selected']] : page.to === location.pathname
                            })} 
                            to={page.to}
                        >

                            {page.icon === 'RiGitRepositoryFill' ? <RiGitRepositoryFill/> : ''}
                            {page.icon === 'RiUserStarFill' ? <RiUserStarFill/> : ''}
                            {page.icon === 'RiMailAddFill' ? <RiMailAddFill /> : ''}

                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}