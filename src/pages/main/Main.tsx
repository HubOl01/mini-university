import React, { useState } from 'react'
import { Button, Calendar, Input } from '@vkontakte/vkui';
import { useQuery } from 'react-query';
import CardLesson from '../../components/ui/CardLesson';
import { ILesson } from '../../models/scheduleModel';
import { ScheduleService } from '../../core/services/ScheduleAPI.service';
import { indexListFacult, indexListGroup } from '../../core/utils/indexedGroupAndFacult';
import { CalendarDays } from '@vkontakte/vkui/dist/components/CalendarDays/CalendarDays';
import Schedule from '../schedule/Schedule';



export default function Main() {
  const [value, setValue] = useState(() => new Date());
  // const [enableTime, setEnableTime] = useState(false);
  // const [disablePast, setDisablePast] = useState(false);
  // const [disableFuture, setDisableFuture] = useState(false);
  // const [disablePickers, setDisablePickers] = useState(false);
  // const [showNeighboringMonth, setShowNeighboringMonth] = useState(false);
  // const [locale, setLocale] = useState('ru');
  // const [size, setSize] = useState('m');
  // const [listenDayChangesForUpdate, setListenDayChangesForUpdate] = useState(false);
  // const [schedules, setSchedule] = useState([])
  const { data } = useQuery(['schedules'], () =>
    ScheduleService.getAll()
  )


  return (
    <>
      <div>
        <h1 style={{
          textAlign: "center"
        }}>
          2 неделя
        </h1>
      </div>
      <Calendar
        style={{
          width: '100%',
        }}
        showNeighboringMonth={true}
        // ScheduleService
        value={value}
        onChange={setValue}
        disablePickers={true}
        aria-orientation={'vertical'}
        weekStartsOn={0}

      />
      <Schedule />
    </>
  )
}