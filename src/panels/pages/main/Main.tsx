import React, { useState } from 'react'
import CardLesson from '../../layouts/CardLesson';
import { Calendar } from '@vkontakte/vkui';

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
        <CardLesson/>
        <CardLesson/>
        <CardLesson/>
        <CardLesson/>
        <CardLesson/>
      </>
    )
  }