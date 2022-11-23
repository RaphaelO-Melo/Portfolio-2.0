import style from './Experience.module.scss';
import Job from './Job/Job';

export default function Experience(){
    return(
        <section className={style.containerContent}>
            <Job />
        </section>
    );
}