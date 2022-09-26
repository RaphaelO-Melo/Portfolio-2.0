import courses from 'data/graduation/courses.json';
import UniversityCard from './UniversityCard';
import CourseCard from './CourseCard';
import style from './Graduation.module.scss';

export default function Graduation() {
    return (
        <section>
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