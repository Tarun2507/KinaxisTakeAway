
import dayjs, { Dayjs } from 'dayjs';
import * as React from 'react';
import KinaxisCalendar from '../../../shared/components';
import { IBirth, IPersonResponse } from '../../interfaces/home-page-interfaces';
import AxiosInstance from '../../../../src/core/services/error-interceptor'
import PersonList from '../person-list/person-list';
import { useNavigate } from "react-router-dom"
import "./homepage.css"
import "../../../shared/styles/common.css"
const HomePage = () => { 
    const navigateTo = useNavigate()
    const [currentDateValue, setCurrentDateValue] = React.useState(dayjs(new Date()));
    const [people, setPeople] = React.useState<IBirth[]>([]);
    const setDateValue = (dateValue: Dayjs) => {
      setCurrentDateValue((dateValue));
      console.log(dateValue);
    }
    const navigateToFav = () => {
      navigateTo('/favourites');
    }
    React.useEffect(() => {
        const month = currentDateValue.month() + 1;
        const date = currentDateValue.date();
        AxiosInstance.get<IPersonResponse>(`/onthisday/births/${month}/${date}`)
        .then(({ data }: { data: IPersonResponse }) => { 
          setPeople(data.births);
        })
        .catch((error) => {
          console.log(error);
        });
      }, [currentDateValue]);
      return (
        <>
        <div className = "rootElement">
        <KinaxisCalendar dateValue = {currentDateValue} setDateValue = {setDateValue}></KinaxisCalendar>
        <section className="container">
           <PersonList people = {people}></PersonList>
        </section>
        </div>
        <div>
          <button onClick = {()=> navigateToFav()}>View Favourites</button>
        </div>
        </>
      );
    }
    export { HomePage } ;