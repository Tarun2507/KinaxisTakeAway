import KinaxisList from "../../../shared/components/List/kinaxis-list";
import { IBirth } from "../../interfaces/home-page-interfaces";
import "./person-list.css"
import { saveToFavourites } from "../person-list/services/person-list.service"
export interface IProps {
    people: IBirth[]
}

const PersonList = (props: IProps) => {
    const favPplList: IBirth[] = [];
	const addToFav = (personIndex: number) => {
        favPplList.push(props.people[personIndex]);
        saveToFavourites(favPplList);
    }
	return (
        <>
       <KinaxisList people = {props.people} isFavButtonReq = {true} addToFav = {addToFav}></KinaxisList>
       </>
    )
}
export default PersonList;