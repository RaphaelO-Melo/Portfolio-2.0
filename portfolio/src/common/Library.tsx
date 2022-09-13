import projects from 'data/graduation/projects.json';
import tools from 'data/graduation/tools.json';
import institutions from 'data/graduation/institutions.json';
import { Tool } from 'types/Tool';

export const convertToBrazilDate = (date: string) : string => {
    return date.split('-').reverse().join('/');
};

export const getIconsListFromCourse = (projectId: number) : Tool[] => {
    
    const found = projects.find(currentProject => currentProject.id === projectId);
    if(found != undefined){
        return found.tools.map(currentTool => (getTool(currentTool)));
    } else {
        return [];
    }

};

export const getTool = (toolId: number) : Tool => {

    const found = tools.find(currentTool => currentTool.id === toolId);
    if(found === undefined){
        return {
            'id': 0,
            'name': 'Desconhecido',
            'icon': 'question.svg'
        };
    } else {
        return found;
    }

};

export const getInstitutionName = (id: number): string => {

    const found = institutions.find(institution => institution.id === id);
    if(found != undefined)
        return found.name;
    else
        return 'Desconhecido';

};