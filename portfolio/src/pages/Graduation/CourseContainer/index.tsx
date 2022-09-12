import { Course } from 'types/Course';
import style from './CourseContainer.module.scss';

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
    
    return (
        <div className={style.card}>
            <div className={style.card__header}>
                <h2 className={style.card__header__name}>Nome do projeto</h2>
                <span className={style.card__header__icons}>ícones</span>
            </div>
            <div className={style.card__body}>
                Conteúdo do curso
            </div>
        </div>
    );
}