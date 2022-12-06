import style from './Job.module.scss';
import { ImBooks } from 'react-icons/im';
import classNames from 'classnames';
import TechToolMin from 'components/TechToolMin';
import { Job } from 'types/Job';
import { getCompanyName } from 'common/Library';

export default function Jobs(job : Job){

    let currentJob = false;
    const startDate = job.start_date.split('-').reverse().join('/');
    const finalDate = job.final_date.split('-').reverse().join('/');

    if(finalDate === '31/12/9999')
        currentJob = true;


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
                {job.position}
            </h2>

            <h3 className={style.card__company}>
                { getCompanyName(job.company) }
            </h3>

            <div className={style.card__dates}>
                <div className={style.card__dates__period}>
                    <span>{startDate}</span>
                    -
                    <span>{currentJob ? 'Até hoje' : finalDate}</span>
                </div>
            </div>

            <p className={style.card__description}>
                {job.description}
            </p>

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