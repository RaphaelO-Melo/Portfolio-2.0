import { Course } from 'types/Course';
import style from './CourseCard.module.scss';
import { getInstitutionName, getProjectName, convertToBrazilDate } from 'common/Library';
import { Link } from 'react-router-dom';
import { FaGraduationCap } from 'react-icons/fa';
import { GrCertificate } from 'react-icons/gr';

export default function CourseContainer({
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

    return (
        <div className={style.card}>
            <div className={style.card__header}>
                <h2 className={style.card__header__name}>
                    {name}
                    {type == 1 ? <FaGraduationCap className={style.card__header__name__type}  /> : <GrCertificate className={style.card__header__name__type}/>}
                </h2>
                <span className={style.card__header__institution}>
                    {institutionName}
                </span>
                <span className={style.card__header__date}>
                    {convertToBrazilDate(start_date)} - {convertToBrazilDate(final_date)}
                </span>
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
                                to={'/projects/'+project}
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