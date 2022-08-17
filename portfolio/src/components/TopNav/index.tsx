import style from './TopNav.module.scss';
import { useLocation, Link } from 'react-router-dom';
import classNames from 'classnames';

export default function TopNav(){

    const location = useLocation();

    const routes = [
        {label: 'Projetos', to: '/projects'},
        {label: 'Sobre', to: '/'},
        {label: 'Contato', to: '/contact'},
    ];

    return (
        <nav className={style.menu}>
            <ul className={style.menu__list}>
                {routes.map((route, index) => (
                    <li key={index}>
                        <Link 
                            className={classNames({
                                [style.menu__list__item] : true,
                                [style['menu__list__item--selected']] : route.to === location.pathname
                            })} 
                            to={route.to}
                        >
                            {route.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}