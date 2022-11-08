import { Course } from 'types/Course';
import style from './UniversityCard.module.scss';
import { getInstitutionName, getProjectName, convertToBrazilDate } from 'common/Library';
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
    const swal = withReactContent(Swal);
    
    function showMessage(title: string, body: string, type: string){
        swal.fire({
            html: <div>
                <h1>{title}</h1>
                <p>{body}</p>
                <span>{type}</span>
            </div>
        });
    }

    return (
        <div className={style.card}>
            <div className={style.card__header}>
                <div className={style.card__header__buttons}>
                    <FaUniversity
                        onClick={() => showMessage('Título modal da instituição', 'Corpo da mensagem da instituição', 'tipo da instituição')}
                        className={style.card__header__buttons__institution} 
                    />
                    <ImBooks
                        onClick={() => projects.length > 0 ? showMessage('Título modal dos projetos', 'Corpo da mensagem dos projetos', 'tipo dos projetos') : ''}
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