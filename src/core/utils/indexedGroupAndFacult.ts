import { IFaculty } from '../../models/scheduleModel';
// var isLoading: boolean = false;
export function indexListGroup(name: string, faculties: Array<IFaculty>): number {
    let index = 0;
    faculties.forEach((faculty, i) => {
        faculty.groups.forEach((group, j)=>{
            if (faculties[i].groups[j].name == name) {
                console.log(`Index(indexListGroup) = ${j} (${faculties[i].groups[j].name} == ${name})`)
                index = j;
                return j;
              }
        })
    });
    return index;
}

export function indexListFacult(name: string, faculties: Array<IFaculty>): number {
    let index = 0;
    faculties.forEach((faculty, i) => {
        faculty.groups.forEach((group, j)=>{
            if (faculties[i].groups[j].name == name) {
                console.log(`Index(indexListFacult) = ${i} (${faculties[i].groups[j].name} == ${name})`)
                index = i;
                return i;
              }
        })
    });
    return index;
}