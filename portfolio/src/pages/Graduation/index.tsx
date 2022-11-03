import courses from 'data/graduation/courses.json';
import UniversityCard from './UniversityCard';
import CourseCard from './CourseCard';
import style from './Graduation.module.scss';
import { useGraduationContext } from 'common/context/Graduation';
import classNames from 'classnames';

export default function Graduation() {
    
    const context = useGraduationContext();
    let currentCourses = courses.filter(current => current.type === context.getType() || context.getType() === 0);
    currentCourses = currentCourses.filter(current => current.name.toLocaleLowerCase().includes(context.getSearch()));
    
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

            <div className={style.graduations}>
                {
                    currentCourses.map(currentCourse => (
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
            </div>

            <div className={style.courses}>
                {
                    currentCourses.map(currentCourse => (
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

            {
                currentCourses.length === 0 ? 
                    <div className={style.notFound}>
                        Nenhum resultado encontrado
                    </div>
                    : ''
            }

        </section>
    );
}