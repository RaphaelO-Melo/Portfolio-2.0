import courses from 'data/graduation/courses.json';
import UniversityCard from './UniversityCard';
import CourseCard from './CourseCard';
import style from './Graduation.module.scss';
import { useGraduationContext } from 'common/context/Graduation';
import classNames from 'classnames';

export default function Graduation() {
    
    const context = useGraduationContext();
    
    return (
        <section>

            <div className={style.filters}>
                <div className={style.filters__types}>
                    <button 
                        className={classNames({
                            [style.filters__types__type] : true,
                            [style['filters__types__type--selected']] : context.getType() === 1
                        })}
                        onClick={() => context.changeType(1)}
                    >Graduações</button>
                    <button 
                        className={classNames({
                            [style.filters__types__type] : true,
                            [style['filters__types__type--selected']] : context.getType() === 2
                        })}
                        onClick={() => context.changeType(2)}
                    >Cursos</button>
                </div>
                <input className={style.filters__search} type="text" placeholder='Pesquisar...' onChange={(event) => context.changeSearch(event.target.value)} />
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