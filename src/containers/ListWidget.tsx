import CardLesson from '../components/ui/CardLesson';
import { ILesson, ISchedule } from '../models/scheduleModel';

interface ListWidgetProps {
  ifacult: number,
  igroup: number,
  week: number,
  weekday: number,
  data: ISchedule
}

export default function ListWidget({ ifacult, igroup, week, weekday, data }: ListWidgetProps) {
  function listLessons(week: number, weekday: number): ILesson[] {
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
      {data ? listLessons(week, weekday).map((lesson) => (
        <CardLesson lesson={lesson} />
      )) : <>Нет данных</>}
    </>
  )
}
