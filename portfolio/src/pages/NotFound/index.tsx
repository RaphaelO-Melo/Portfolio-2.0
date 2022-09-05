import { Link, useNavigate } from 'react-router-dom';
import style from './NotFound.module.scss';

export default function NotFound(){

    const navigate = useNavigate();

    return (
        <section className={style.wrapper}>
            <div className={style.wrapper__title}>
                <h1>404!</h1>
                <h1>Not Found</h1>
            </div>
            <div className={style.wrapper__text}>
                <p>Ops! A página que você está procurando não existe ou foi removida.</p>
            </div>
            <div className={style.wrapper__back}>
                <button onClick={() => navigate(-1)}>{'< Voltar'}</button>
            </div>
        </section>
    );
}