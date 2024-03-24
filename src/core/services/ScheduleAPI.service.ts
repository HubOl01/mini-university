import axios from "axios";
import { ISchedule } from "../../models/scheduleModel";
import { useQuery } from "react-query";
// export function getSchedule() {
//     axios({
//         method: "GET",
//         url:"",
//       }).then((response)=>{
//         const data = response.data
//         setSchedule(data)
//       }).catch((error) => {
//         if (error.response) {
//           console.log(error.response);
//           console.log(error.response.status);
//           console.log(error.response.headers);
//           }
//       })

//     }import axios from "axios"

export const ScheduleService = {
  async getAll() {
    const response = await axios.get<ISchedule>(
      import.meta.env.VITE_SCHEDULE_API + "/api.php"
    );
    return response.data;
  },
};

