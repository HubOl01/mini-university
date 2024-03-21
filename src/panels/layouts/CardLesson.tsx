import { Grid } from '@mui/material'
import { Card } from '@vkontakte/vkui'
import { DEFAULT_VIEW_PANELS } from '../../routes';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export default function CardLesson() {
  const routeNavigator = useRouteNavigator()
  return (
    <Card mode="outline" style={{margin: '10px 10px'}} onClick={()=> {
        routeNavigator.push(`/${DEFAULT_VIEW_PANELS.SCHEDULE}`)
        console.log("test");
    }
    }>
        <Grid container>
          <Grid sx={{
            width: "60px",
            height: "100%",
            // padding: '10px',
            textAlign: 'center',            
            margin: 'auto 0px'
          }}>
            <div>
              09:50
            </div>
            <div>
              11:25
            </div>
          </Grid>
          <Grid sx={{padding: '10px'}}>
            <div style={{
              fontWeight: 'bold',
              fontSize: '20px',
            }}>
              Химические реакторы
            </div>
            <div style={{
              fontWeight: 'bold',
              fontSize: '20px',
            }}>
              лк.
            </div>
            <div>
              11.09.2023 - 18.12.2023
            </div>
            <div>
              Б201
            </div>
            <div>
              Исаева В.А.
            </div>
          </Grid>

        </Grid>
      </Card>
  )
}
