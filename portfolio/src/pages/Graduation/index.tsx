import courses from 'data/graduation/courses.json';
import { getCourseTypeById, getInstitutionById, convertToBrazilDate, getProjectById, getToolById } from 'common/Library';

export default function Graduation() {

    return (
        <section>
            {courses.map(course => (
                <div key={course.id}>
                    {course.id}
                    <br /><br />
                    {course.name}
                    <br /><br />
                    {getCourseTypeById(course.type)}
                    <br /><br />
                    {getInstitutionById(course.institution)}
                    <br /><br />
                    {convertToBrazilDate(course.start_date)}
                    <br /><br />
                    {convertToBrazilDate(course.final_date)}
                    <br /><br />
                    {course.description}
                    <br /><br />
                    {course.link}
                    <br /><br />
                    {
                        course.projects.map(project => (
                            <div key={project}>
                                {getProjectById(project)?.name}
                                <br /><br />
                                {getProjectById(project)?.description}
                                <br /><br />
                                {getProjectById(project)?.image}
                                <br /><br />
                                {getProjectById(project)?.institution}
                                <br /><br />
                                {getProjectById(project)?.tools.map(tool => (
                                    getToolById(tool)?.name+' : '+getToolById(tool)?.icon
                                ))}
                            </div>
                        ))
                    }
                    <br /><br />
                </div>
            ))}
        </section>
    );
}