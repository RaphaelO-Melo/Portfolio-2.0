import courseTypes from 'data/graduation/courseTypes.json';
import institutions from 'data/graduation/institutions.json';
import projects from 'data/graduation/projects.json';
import tools from 'data/graduation/tools.json';
import { Project } from 'types/Project';
import { Tool } from 'types/Tool';

export const convertToBrazilDate = (date: string) : string => {
    return date.split('-').reverse().join('/');
};

export const getCourseTypeById = (id: number) : string|undefined => {
    const found = courseTypes.find(courseType => courseType.id === id);
    return found?.type;
};

export const getInstitutionById = (id: number) : string|undefined => {
    const found = institutions.find(institution => institution.id === id);
    return found?.name;
};

export const getProjectById = (id: number) : Project|undefined => {
    const found = projects.find(project => project.id === id);
    return found;
};

export const getToolById = (id: number) : Tool|undefined => {
    const found = tools.find(tool => tool.id === id);
    return found;
};