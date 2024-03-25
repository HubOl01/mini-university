import { Card } from '@vkontakte/vkui'
import { ILesson } from '../../models/scheduleModel';
// import { DEFAULT_VIEW_PANELS } from '../../routes';
// import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

interface CardLessonProps {
  lesson: ILesson;
}

export default function CardLesson({ lesson }: CardLessonProps) {
  // const routeNavigator = useRouteNavigator()
  return (
    <Card mode="outline" style={{ margin: '10px 10px' }}
    /* onClick={() => {
      routeNavigator.push(`/${DEFAULT_VIEW_PANELS.SCHEDULE}`)
      console.log("test");
    }
    } */
    >
      <div style={{display: 'flex'}}>
        <div style={{
          width: "80px",
          height: "100%",
          // padding: '10px',
          textAlign: 'center',
          margin: 'auto 0px'
        }}>
          <div>
            {lesson.time.start.slice(0, -3)}
          </div>
          <div>
            {lesson.time.end.slice(0, -3)}
          </div>
        </div>
        <div style={{ padding: '5px' }}>
          <div style={{
            fontWeight: 'bold',
            fontSize: '20px',
          }}>
            {lesson.subject}
          </div>
          <div style={{
            fontWeight: 'bold',
            fontSize: '20px',
          }}>
            {lesson.type}
          </div>
          <div>
            {lesson.date.start} - {lesson.date.end}
          </div>
          <div>
            {lesson.audiences.map((audence, index) => audence.name + (lesson.audiences.length - 1 != index ? ", " : ''))}
          </div>
          <div>
            {lesson.teachers.map((teacher, index) => teacher.name + (lesson.teachers.length - 1 != index ? ", " : ''))}
          </div>
        </div>

      </div>
    </Card>
  )
}
