import style from './Job.module.scss';
import { ImBooks } from 'react-icons/im';
import classNames from 'classnames';
import TechToolMin from 'components/TechToolMin';

export default function Jobs(){
    return(
        <div className={style.card}>
            
            <ImBooks 
                onClick={() => alert('Projetos')}
                className={classNames({
                    [style.card__library] : true,
                    [style['card__library--disabled']] : 1 <= 0
                })}
            />

            <h2 className={style.card__occupation}>
                Ocupação profissional
            </h2>

            <h3 className={style.card__company}>
                Nome da empresa
            </h3>

            <div className={style.card__dates}>
                <div className={style.card__dates__period}>
                    <span>01/01/2022</span>
                    -
                    <span>31/12/2022</span>
                </div>
                <span>(2 anos e 5 meses)</span>
            </div>

            <p className={style.card__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className={style.card__tools}>
                <h6 className={style.card__tools__title}>Tecnologias utilizadas:</h6>
                <div className={style.card__tools__icons}>
                    <TechToolMin key={1} toolId={1} />
                    <TechToolMin key={2} toolId={2} />
                    <TechToolMin key={3} toolId={3} />
                    <TechToolMin key={4} toolId={4} />
                </div>
            </div>

        </div>
    );
}