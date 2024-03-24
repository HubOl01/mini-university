import { Button, Input } from "@vkontakte/vkui";
import CardLesson from "../../components/ui/CardLesson";
import { weekNumber } from "../../core/utils/weekNumber";
import { useState } from "react";
import { indexListFacult, indexListGroup } from "../../core/utils/indexedGroupAndFacult";
import { ILesson } from "../../models/scheduleModel";
import { useQuery } from "react-query";
import { ScheduleService } from "../../core/services/ScheduleAPI.service";
import { Weeks } from "../../core/constants/week";

export default function Schedule() {
  // const [enableTime, setEnableTime] = useState(false);
  // const [disablePast, setDisablePast] = useState(false);
  // const [disableFuture, setDisableFuture] = useState(false);
  // const [disablePickers, setDisablePickers] = useState(false);
  // const [showNeighboringMonth, setShowNeighboringMonth] = useState(false);
  // const [locale, setLocale] = useState('ru');
  // const [size, setSize] = useState('m');
  // const [listenDayChangesForUpdate, setListenDayChangesForUpdate] = useState(false);
  // const ListLoading = withListLoading(List);
  const { data } = useQuery(['schedules'], () =>
    ScheduleService.getAll()
  )
  const [textValue, setTextValue] = useState('3-147');
  const [groupValue, setGroupValue] = useState(0);
  const [facultValue, setFacultValue] = useState(0);
  const thisWeek = weekNumber(new Date()) % 2;
  return (
    <>

      <div style={{ margin: '10px', display: 'flex' }}>
        <Input
          id="group"
          type="text"
          defaultValue={textValue}
          value={textValue}
          onChange={e => setTextValue(e.target.value)}
          placeholder="3-147"
        />
        <Button
          onClick={() => {
            setFacultValue(() => indexListFacult(textValue, data!.faculties));
            setGroupValue(() => indexListGroup(textValue, data!.faculties));
            console.log(`${facultValue} - ${groupValue}`);
          }}
        >Нажми</Button>
      </div>
      <div>
        {
          thisWeek == 1 ?
            Weeks.week1
            // добавить listWidget
            : Weeks.week2
          // добавить listWidget
        }
      </div>

    </>
  )
}
