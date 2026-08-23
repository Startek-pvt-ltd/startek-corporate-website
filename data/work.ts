export type WorkDivision="Startek Digital"|"Startek Web Hub"|"Startek Print Hub";
export type WorkProject={slug:string;title:string;client:string;division:WorkDivision;category:string;description:string;year:string;services:string[];image:string;featured?:boolean;challenge:string;solution:string;industry:string;projectUrl?:string;caseStudyUrl?:string};

export const workProjects:WorkProject[]=[];

export const workFilters=["All","Startek Digital","Startek Web Hub","Startek Print Hub"] as const;
export function getWorkProject(slug:string){return workProjects.find(project=>project.slug===slug)}
