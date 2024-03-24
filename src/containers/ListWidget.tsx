import React from 'react'
import { useQuery } from 'react-query';
import { ScheduleService } from '../core/services/ScheduleAPI.service';
import CardLesson from '../components/ui/CardLesson';

interface ListWidgetProps{
    ifacult: number,
    igroup: number,
    week: number,
    weekday: number,
}

export default function ListWidget({ifacult, igroup, week, weekday}: ListWidgetProps) {
    const { data } = useQuery(['schedules'], () =>
    ScheduleService.getAll()
  )
    function listLessons(week: number, weekday: number): any[] {
        const max: number = data.faculties[ifacult].groups[igroup].lessons.length;
        const list1: any[] = [];
        for (let i = 0; i < max; i++) {
          if (data!.faculties[ifacult].groups[igroup].lessons[i].date.week === week &&
              data!.faculties[ifacult].groups[igroup].lessons[i].date.weekday === weekday) {
            list1.push(data!.faculties[ifacult].groups[igroup].lessons[i]);
          }
        }
        return list1;
      }
      
  return (
    <>
    {listLessons(week, weekday).map((lesson)=>{
        <CardLesson lesson={lesson}/>
    })}
    </>
  )
}
