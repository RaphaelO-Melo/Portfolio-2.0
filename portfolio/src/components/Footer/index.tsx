import style from './Footer.module.scss';
import { RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri';

export default function Footer(){
    return (
        <footer className={style.wrapper}>
            <div className={style.wrapper__text}>
                <p className={style.wrapper__text__title}>Desenvolvido por</p>
                <p className={style.wrapper__text__content}>Raphael Melo</p>
            </div>
            <div className={style.wrapper__links}>
                <a 
                    className={style.wrapper__links__link} 
                    href="https://www.linkedin.com/in/raphael-oliveira-melo-ba372b104/"
                    target='_blank'
                    rel='noreferrer'>
                    <RiGithubFill />
                </a>
                <a 
                    className={style.wrapper__links__link} 
                    href="https://github.com/RaphaelO-Melo/"
                    target='_blank'
                    rel='noreferrer'>
                    <RiLinkedinBoxFill />
                </a>
            </div>
        </footer>
    );
}