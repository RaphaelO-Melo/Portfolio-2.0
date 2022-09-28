import { useParams } from 'react-router-dom';
import { getProject } from 'common/Library'; 
import style from './Project.module.scss';
import { FiExternalLink } from 'react-icons/fi';

export default function Project(){

    const {id} = useParams();
    const {name, description, image, link, institution, tools } = getProject(Number(id));
    const styleIcon = { color: 'white'};

    return(
        <section className={style.card}>
            <div className={style.card__image}>
                <a className={style.card__image__container} href={link} target='blank'>
                    <img  src={image} alt={name} />
                    <span>
                        <p>
                            Abrir projeto    
                        </p>
                        <FiExternalLink style={styleIcon} />
                    </span>
                </a>
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