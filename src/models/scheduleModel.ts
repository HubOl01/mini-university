export type GetSchedulesResponse = {
    data: ISchedule[];
  };

export interface ISchedule {
    name:      string;
    abbr:      string;
    faculties: IFaculty[];
}

export interface IFaculty {
    name:   string;
    groups: IGroup[];
}

export interface IGroup {
    name:    string;
    lessons: ILesson[];
}

export interface ILesson {
    subject:   string;
    type:      Type;
    time:      ITime;
    date:      IDateClass;
    audiences: IAudience[];
    teachers:  IAudience[];
}

export interface IAudience {
    name: string;
}

export interface IDateClass {
    start:   string;
    end:     string;
    weekday: number;
    week:    number;
}

export interface ITime {
    start: string;
    end:   string;
}

export enum Type {
    Empty = "—",
    Лаб = "лаб.",
    Лк = "лк.",
    ПрЗ = "пр.з.",
}
