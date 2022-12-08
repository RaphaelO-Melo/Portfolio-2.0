import style from './Job.module.scss';
import { ImBooks } from 'react-icons/im';
import classNames from 'classnames';
import TechToolMin from 'components/TechToolMin';
import { Job } from 'types/Job';
import { getCompanyName, getToolsFromCompany } from 'common/Library';

export default function Jobs(job : Job){

    let currentJob = false;
    const startDate = job.start_date.split('-').reverse().join('/');
    const finalDate = job.final_date.split('-').reverse().join('/');
    const tools = getToolsFromCompany(job.id);

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

            {
                tools.length > 0 ? 
                    <div className={style.card__tools}>
                        <h6 className={style.card__tools__title}>Tecnologias utilizadas:</h6>
                        <div className={style.card__tools__icons}>
                            {tools.map(tool => (
                                <TechToolMin key={tool} toolId={tool} />
                            ))}
                        </div>
                    </div>
                    : 
                    ''
            }

        </div>
    );
}