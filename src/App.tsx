import { Panel, PanelHeader, PanelHeaderBack, PanelHeaderButton, Root, SplitCol, SplitLayout, View, usePlatform } from '@vkontakte/vkui';
import { useActiveVkuiLocation, useGetPanelForView, usePopout, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { DEFAULT_ROOT, DEFAULT_VIEW, DEFAULT_VIEW_PANELS } from './routes';
import Schedule from './pages/schedule/Schedule';
import './App.css';
import { useState } from 'react';
import Main from './pages/main/Main';

export const App = () => {
  const mainPanel = DEFAULT_VIEW_PANELS.HOME;
  const schedulePanel = DEFAULT_VIEW_PANELS.SCHEDULE;
  const { view: activeView } = useActiveVkuiLocation();
  const activePanel = useGetPanelForView(DEFAULT_VIEW); 
  const routeNavigator = useRouteNavigator();
  return (

      // <View activePanel={activePanel}>
      //   <Panel id={activePanel}>
      //     <Schedule />
      //   </Panel>
      // </View>
      <Root activeView={activeView}>
      <View nav={DEFAULT_VIEW} activePanel={activePanel}>
        {/* <Panel nav={mainPanel}><Main/></Panel> */}
        <Panel nav={schedulePanel}>
        {/* <PanelHeader
            before={
              <PanelHeaderBack
                onClick={() => routeNavigator.back()}
                // label={platform === 'vkcom' ? 'Назад' : undefined}
              />
            }
              ></PanelHeader> */}
          <Schedule /></Panel>
      
      </View>
      
    </Root>
  );
};

