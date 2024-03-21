import { Calendar, Card, FormItem, LocaleProvider } from "@vkontakte/vkui";
import { useState } from "react";

export default function Schedule() {
  const [value, setValue] = useState(() => new Date());
  // const [enableTime, setEnableTime] = useState(false);
  // const [disablePast, setDisablePast] = useState(false);
  // const [disableFuture, setDisableFuture] = useState(false);
  // const [disablePickers, setDisablePickers] = useState(false);
  // const [showNeighboringMonth, setShowNeighboringMonth] = useState(false);
  // const [locale, setLocale] = useState('ru');
  // const [size, setSize] = useState('m');
  // const [listenDayChangesForUpdate, setListenDayChangesForUpdate] = useState(false);
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
            enableTime={false}
            
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
      <Card mode="outline">
{/* sas */}
      </Card>
    </>
  )
}
