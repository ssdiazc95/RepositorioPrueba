export interface TablePerson {
    docType: string;
    docNumber: number;
    name: string;
    sureName: string;
    mother?: string;
    father?: string;
}

export interface Person {
    doctype: string;
    docnumber: number;
    fullname: string;
    gender: string;
    birth: Date;
}

export interface Adopt {
    id?: number;
    idpersona: number;
    docnumberfather?: number;
    docnumbermother?: number;
}
