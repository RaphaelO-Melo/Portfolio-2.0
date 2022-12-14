import projects from 'data/elements/projects.json';
import tools from 'data/elements/tools.json';
import institutions from 'data/elements/institutions.json';
import companyes from 'data/elements/companies.json';
import { Tool } from 'types/Tool';
import { Project } from 'types/Project';

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

export const getInstitutionLink = (id: number): string => {

    const found = institutions.find(institution => institution.id === id);
    if(found != undefined)
        return found.link;
    else
        return 'Desconhecido';

};

export const getProjectName = (id: number): string => {
    
    const found = projects.find(project => project.id === id);
    if(found != undefined)
        return found.name;
    else
        return 'Desconhecido';

};

export const getProject = (id: number): Project => {

    const found = projects.find(currentProject => currentProject.id === id);

    if(found === undefined){
        return {
            'id': 0,
            'name': 'Desconhecido',
            'description': 'Desconhecido',
            'image': '',
            'link': '',
            'institution': 0,
            'company': 0,
            'tools': []
        };

    } else {
        return found;
    }

};

export const getToolsFromInstituton = (id: number): number[] => {

    const tools: number[] = [];
    const institutionProjects = projects.filter(current => current.institution === id);
    institutionProjects.forEach(project => {
        project.tools.forEach(tool => {
            if(!tools.includes(tool))
                tools.push(tool);
        });
    });

    return tools;

};

export const getCompanyName = (id: number): string => {

    const found = companyes.find(currentCompany => currentCompany.id === id);

    if(found === undefined)
        return 'Não localizado';
    else
        return found.name;

};

export const getToolsFromCompany = (id: number): number[] => {

    const tools: number[] = [];
    const companyProjects = projects.filter(current => current.company === id);
    companyProjects.forEach(project => {
        project.tools.forEach(tool => {
            if(!tools.includes(tool))
                tools.push(tool);
        });
    });

    return tools;

};

export const getProjectsFromCompany = (id: number): Project[] => {

    const companyProjects = projects.filter(current => current.company === id);
    return companyProjects;

};