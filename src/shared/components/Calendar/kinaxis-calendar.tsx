import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export interface IDateProps {
    dateValue : Dayjs;
    setDateValue(date: Dayjs | null) : void;
}
const KinaxisCalendar = (props: IDateProps) => {
 return (
    <div className="App">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DateCalendar  value = {props.dateValue} onChange = {(newDate) => props.setDateValue(newDate)} />
    </LocalizationProvider>
 </div>
 )
}
export default KinaxisCalendar;