import style from './Content.module.scss';
import { AboutContent } from 'types/AboutContent';
import classNames from 'classnames';

export default function Content({id, title, text, image, to} : AboutContent){
    return (
        <div className={classNames({
            [style.content] : true,
            [style['content--reverse']] : id%2 === 0,
        })}>


            <div className={classNames({
                [style.content__info] : true,
                [style['content__info--left']] : id%2 === 0,
                [style['content__info--right']] :id%2 === 1
            })}>

                <h2 className={style.content__info__title}>
                    {title}
                </h2>
                <p className={style.content__info__text}>
                    {text}
                </p>
                <button>{to}</button>

            </div>

            

            <div className={style.content__image}>
                <img src={image} alt="title" />
            </div>

        </div>
    );
}