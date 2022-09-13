import { Course } from 'types/Course';
import style from './CourseCard.module.scss';
import { getIconsListFromCourse, getInstitutionName, convertToBrazilDate } from 'common/Library';

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
    
    const icons = getIconsListFromCourse(id);
    const institutionName = getInstitutionName(institution);

    return (
        <div className={style.card}>
            <div className={style.card__header}>
                <h2 className={style.card__header__name}>{name}</h2>
                <span className={style.card__header__icons}>
                    {
                        icons.map((icon, index) => (
                            icon.name
                        ))
                    }
                </span>
            </div>
            <div className={style.card__body}>

                <div className={style.card__body__group}>
                    <div className={style.card__body__group__info}>
                        {institutionName}
                    </div>
                </div>

                <div className={style.card__body__group}>
                    <div className={style.card__body__group__info}>
                        {convertToBrazilDate(start_date)} - {convertToBrazilDate(final_date)}
                    </div>
                </div>
                
                <div className={style.card__body__group}>
                    <div className={style.card__body__group__info}>
                        {description}
                    </div>
                </div>


            </div>
        </div>
    );
}