import courses from 'data/graduation/courses.json';
import UniversityCard from './UniversityCard';
import CourseCard from './CourseCard';
import style from './Graduation.module.scss';
import { useContext } from 'react';
import { GraduationContext } from 'common/context/Graduation';

export default function Graduation() {
    
    const context = useContext(GraduationContext);
    
    return (
        <section>

            <div className={style.filters}>
                <div className={style.filters__types}>
                    <button className={style.filters__types__type} onClick={() => context?.setType(1)}>Teste 1</button>
                    <button className={style.filters__types__type} onClick={() => context?.setType(2)}>Teste 2</button>
                </div>
                <input className={style.filters__search} type="text" onChange={(event) => context?.setSearch(event.target.value)} />
            </div>

            {
                courses.map(currentCourse => (
                    currentCourse.type === 1 ? 
                        <UniversityCard 
                            key={currentCourse.id}
                            id={currentCourse.id}
                            name={currentCourse.name} 
                            type={currentCourse.type}
                            institution={currentCourse.institution}
                            start_date={currentCourse.start_date}
                            final_date={currentCourse.final_date}
                            description={currentCourse.description}
                            link={currentCourse.link}
                            projects={currentCourse.projects}
                        />
                        : ''
                ))
            }

            <div className={style.courses}>
                {
                    courses.map(currentCourse => (
                        currentCourse.type === 2 ? 
                            <CourseCard 
                                key={currentCourse.id}
                                id={currentCourse.id}
                                name={currentCourse.name} 
                                type={currentCourse.type}
                                institution={currentCourse.institution}
                                start_date={currentCourse.start_date}
                                final_date={currentCourse.final_date}
                                description={currentCourse.description}
                                link={currentCourse.link}
                                projects={currentCourse.projects}
                            />
                            : ''
                    ))
                }
            </div>
        </section>
    );
}