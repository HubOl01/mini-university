import React, { useState } from 'react'
import { Button, Calendar, Input } from '@vkontakte/vkui';
import { useQuery } from 'react-query';
import CardLesson from '../../components/ui/CardLesson';
import { ILesson } from '../../models/scheduleModel';
import { ScheduleService } from '../../services/ScheduleAPI.service';



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
      {/* <FormItem> */}
      {/* <LocaleProvider value={locale}> */}
      <Calendar
        style={{
          width: '100%'
        }}
        value={value}
        onChange={setValue}
        // disablePast={true}
        // disableFuture={true}
        disablePickers={true}
        aria-orientation={'vertical'}
      // showNeighboringMonth={showNeighboringMonth}
      // size={'s'}
      // listenDayChangesForUpdate={listenDayChangesForUpdate}
      />
      {/* </LocaleProvider> */}
      {/* </FormItem> */}
      <div style={{ margin: '10px', display: 'flex' }}>
        <Input
          id="group"
          type="text"
          defaultValue={"3-147"}
          placeholder="3-147"
        />
        <Button
          onClick={() => {

          }}
        >Нажми</Button>
      </div>
      <div>
        {data?.faculties ? data.faculties[1].groups[1].lessons.map((lesson: ILesson) => (

          <CardLesson lesson={lesson} />

        ))
          : <p>There are no schedules</p>
        }
      </div>

    </>
  )
}

/* bool isLoading = false;
int indexListGroup(var name) {
  isLoading = true;
  isGroup = false;
  print("indexListGroup {${getResISUCT.faculties.length}}");
  for (int i = 0; i < getResISUCT.faculties.length; i++) {
    for (int j = 0; j < getResISUCT.faculties[i].groups.length; j++) {
      if (getResISUCT.faculties[i].groups[j].name == name) {
        isLoading = false;
        isGroup = true;
        return j;
      }
    }
  }
  isGroup = false;
  isLoading = false;
  return 0;
}

int indexListFacult(var name) {
  isLoading = true;
  isGroup = false;
  print("indexListFacult {${getResISUCT.faculties.length}}");
  for (int i = 0; i < getResISUCT.faculties.length; i++) {
    for (int j = 0; j < getResISUCT.faculties[i].groups.length; j++) {
      if (getResISUCT.faculties[i].groups[j].name == name) {
        isGroup = true;
        isLoading = false;
        return i;
      }
    }
  }
  isGroup = false;
  isLoading = false;
  return 0;
} */