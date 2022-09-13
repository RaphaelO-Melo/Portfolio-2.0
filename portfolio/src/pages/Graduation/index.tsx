import courses from 'data/graduation/courses.json';
import Course from './CourseCard';
export default function Graduation() {
    return (
        <section>
            {
                courses.map(currentCourse => (
                    <Course 
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
                ))
            }
        </section>
    );
}