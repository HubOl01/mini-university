import { Button, Input } from "@vkontakte/vkui";
import { useState } from "react";
import { indexListFacult, indexListGroup } from "../../core/utils/indexedGroupAndFacult";
import { useQuery } from "react-query";
import { ScheduleService } from "../../core/services/ScheduleAPI.service";
import { Weeks } from "../../core/constants/week";
import ListWeekday from "../../containers/ListWeekday";

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
  // const dateNow = new Date();
  // const thisWeek = getWeekNumber(dateNow) % 2;
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
      <h2 style={{ textAlign: "center" }}>
        {

          Weeks.week1
        }
      </h2>
      <ListWeekday facult={facultValue} group={groupValue} week={2} data={data!} />
      <div>
        {/* {weekdaysList.map((_weekday, index)=> <ListWidget ifacult={facultValue} igroup={groupValue} week={1} weekday={index+1} />)} */}
      </div>
      <h2 style={{ textAlign: "center" }}>
        {

          Weeks.week2
        }
      </h2>
      <ListWeekday facult={facultValue} group={groupValue} week={2} data={data!} />
      <div>
      </div>
    </>
  )
}
