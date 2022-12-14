import style from './Introduction.module.scss';

export default function Introduction(){
    return (
        <section className={style.content}>
            <h1 className={style.content__title}>
                Olá!
            </h1>
            <div className={style.content__photo}>
                <img src="./assets/perfil.jpg" alt="" />
            </div>
            <p className={style.content__text}>
                Meu nome é <span className={style.content__text__highlight}>Raphael Melo</span>, sou um desenvolvedor Full Stack e você acabou de entrar no meu portfólio. Que tal conhecer um pouco mais sobre meu trabalho?
            </p>
        </section>
    );
}