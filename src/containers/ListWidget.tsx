import React from 'react'
import { useQuery } from 'react-query';
import { ScheduleService } from '../core/services/ScheduleAPI.service';
import CardLesson from '../components/ui/CardLesson';
import { ILesson, ISchedule } from '../models/scheduleModel';

interface ListWidgetProps{
    ifacult: number,
    igroup: number,
    week: number,
    weekday: number,
    data: ISchedule
}

export default function ListWidget({ifacult, igroup, week, weekday, data}: ListWidgetProps) {
  //   const { data } = useQuery(['schedules'], () =>
  //   ScheduleService.getAll()
  // )
    function listLessons(week: number, weekday: number): ILesson[] {
        // const max: number = data!.faculties[ifacult].groups[igroup].lessons.length;
        const list: ILesson[] = [];
        for (const i in data.faculties[ifacult].groups[igroup].lessons) {
          if (data!.faculties[ifacult].groups[igroup].lessons[i].date.week === week &&
              data!.faculties[ifacult].groups[igroup].lessons[i].date.weekday === weekday) {
            list.push(data!.faculties[ifacult].groups[igroup].lessons[i]);
          }
        }
        return list;
      }
      
  return (
    <>
    {/* {data ? data.faculties.length : <></>} */}
    {data ?/* ? listLessons(week, weekday).map((lesson)=>{ */
        <CardLesson lesson={data!.faculties[ifacult].groups[igroup].lessons[0]}/>
    /*  }) */: <></>}
    </>
  )
}
