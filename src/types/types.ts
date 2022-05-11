
export interface Locate {
    country: string;
    city: string;
    place: string;
}

export interface VideoType {
    id: number;
    path: string;
    title: string;
    date: string;
    dateUpload: string;
    tags: string[];
    rate: number;
    time: number;
    locate: Locate;
}


export interface PersonType {
    id: number;
    pic: string;
    name: string;
    realName: string;
    info: string;
    birthday: string;
    showsId: number[];
    youtube: string;
    mail: string;
}