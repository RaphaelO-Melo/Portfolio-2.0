import { Course } from 'types/Course';
import style from './UniversityCard.module.scss';
import { getInstitutionName, getInstitutionLink, getProjectName, convertToBrazilDate, getToolsFromInstituton } from 'common/Library';
import { Link } from 'react-router-dom';
import { ImBooks } from 'react-icons/im';
import { FaUniversity } from 'react-icons/fa';
import classNames from 'classnames';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import TechToolMin from 'components/TechToolMin';

export default function UniversityCard({
    id,
    name,
    type,
    institution,
    start_date,
    final_date,
    description,
    link,
    projects
}: Course){

    const swal = withReactContent(Swal);
    const institutionName = getInstitutionName(institution);
    const institutionLink = getInstitutionLink(institution);
    const instiuionTools = getToolsFromInstituton(institution);

    function showInstitutionModal(institution: string, startDate: string, finalDate: string, link : string, tools : number[]){
        swal.fire({
            html: 
            <div className={style.messageBody}>
                <h1 className={style.messageBody__header}>
                    <a className={style.messageBody__header__link} href={link} target='__blank'>
                        {institution}
                    </a>
                </h1>
                <div className={style.messageBody__datas}>
                    <div className={style.messageBody__datas__data}>
                        <span className={style.messageBody__datas__data__label}>Data inicial:</span>
                        <span className={style.messageBody__datas__data__value}>{convertToBrazilDate(startDate)}</span>
                    </div>
                    <div className={style.messageBody__datas__data}>
                        <span className={style.messageBody__datas__data__label}>Data final:</span>
                        <span className={style.messageBody__datas__data__value}>{convertToBrazilDate(finalDate)}</span>
                    </div>
                </div>

                {tools.length > 0 ? <h3>Ferramentas utilizadas:</h3> : ''}
                <div className={style.messageBody__tools}>
                    {tools.map(tool => (
                        <TechToolMin key={tool} toolId={tool} />
                    ))}
                </div>
            </div>,
            confirmButtonText: 'Fechar',
            customClass: 'message'
        });
    }

    function showInstitutionProjects(){
        swal.fire({
            html: 
            <div className={style.messageBody}>
                <h3 className={style.messageBody__projectsTitle}>Projetos desenvolvidos:</h3>
                <div className={style.messageBody__projects}>
                    {
                        projects.map((project, index) =>
                            <a className={style.messageBody__projects__project} key={index} href={'/project/'+project}>
                                {getProjectName(project)}
                            </a>
                        )
                    }
                </div>
            </div>,
            confirmButtonText: 'Fechar',
            customClass: 'message'
        });
    }

    return (
        <div className={style.card}>
            <div className={style.card__header}>
                <div className={style.card__header__buttons}>
                    <FaUniversity
                        onClick={() => showInstitutionModal(institutionName, start_date, final_date, institutionLink, instiuionTools)}
                        className={style.card__header__buttons__institution} 
                    />
                    <ImBooks
                        onClick={() => showInstitutionProjects()}
                        className={classNames({
                            [style.card__header__buttons__library] : true,
                            [style['card__header__buttons__library--disabled']] : projects.length <= 0
                        })}
                    />
                </div>
                <h2 className={style.card__header__name}>
                    {name}
                </h2>
            </div>
            <div className={style.card__body}>
                <p className={style.card__body__description}>
                    {description}
                </p>
            </div>
        </div>
    );
}