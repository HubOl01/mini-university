import { ISchedule } from '../models/scheduleModel';
import ListWidget from './ListWidget';
import { weekdaysList } from '../core/data/weekdaysList';

interface ListWeekdayProps {
  facult: number,
  group: number,
  week: number,
  data: ISchedule
}

export default function ListWeekday({ facult, group, week, data }: ListWeekdayProps) {
  return (
    <>
      {weekdaysList.map((weekday, index) => (
        <>
          <h3 style={{ textAlign: "center" }}>{weekday}</h3>
          <ListWidget ifacult={facult} igroup={group} week={week} weekday={index + 1} data={data!} />
        </>
      ))}
    </>
  )
}
