import { useParams } from 'react-router-dom';
import { getProject } from 'common/Library'; 
import style from './Project.module.scss';

export default function Project(){

    const {id} = useParams();
    const {name, description, image, link, institution, tools } = getProject(Number(id));

    return(
        <section className={style.card}>
            <div className={style.card__image}>
                <img  src={image} alt={name} />
            </div>
            <div className={style.card__content}>
                <h2 className={style.card__content__name}>{name}</h2>
                <p className={style.card__content__description}>{description}</p>
            </div>
            <div className={style.card__tools}>
                {tools}
            </div>
        </section>
    );

}