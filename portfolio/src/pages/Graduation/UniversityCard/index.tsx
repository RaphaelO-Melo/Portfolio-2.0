import { Course } from 'types/Course';
import style from './UniversityCard.module.scss';
import { getInstitutionName, getInstitutionLink, getProjectName, convertToBrazilDate } from 'common/Library';
import { Link } from 'react-router-dom';
import { ImBooks } from 'react-icons/im';
import { FaUniversity } from 'react-icons/fa';
import classNames from 'classnames';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

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

    const institutionName = getInstitutionName(institution);
    const institutionLink = getInstitutionLink(institution);
    const swal = withReactContent(Swal);
    
    function showInstitutionModal(institution: string, startDate: string, finalDate: string, link : string){
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
                        onClick={() => showInstitutionModal(institutionName, start_date, final_date, institutionLink)}
                        className={style.card__header__buttons__institution} 
                    />
                    <ImBooks
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
                <div className={style.card__body__projects}>
                    {
                        projects.map((project, index) => 
                            <Link
                                key={index}
                                className={style.card__body__projects__project} 
                                to={'/project/'+project}
                            >
                                {getProjectName(project)}
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
}