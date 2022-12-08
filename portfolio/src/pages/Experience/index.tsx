/* eslint-disable react/jsx-key */
import style from './Experience.module.scss';
import Job from './Job/Job';
import Jobs from 'data/elements/jobs.json';

export default function Experience(){
    return(
        <section className={style.containerContent}>
            {
                Jobs.map((currentJob, index) => (
                    <Job key={index} {...currentJob}/>
                ))
            }
        </section>
    );
}