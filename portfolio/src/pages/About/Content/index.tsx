import style from './Content.module.scss';
import { AboutContent } from 'types/AboutContent';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export default function Content({id, title, text, image, to} : AboutContent){
    return (
        <div className={classNames({
            [style.content] : true,
            [style['content--reverse']] : id%2 === 0,
        })}>
            <div className={style.content__info}>
                <h2 className={style.content__info__title}>
                    {title}
                </h2>
                <p className={style.content__info__text}>
                    {text}
                </p>
                <Link
                    className={style.content__info__link} 
                    to={to}
                >
                    SABER+
                </Link>
            </div>

        </div>
    );
}