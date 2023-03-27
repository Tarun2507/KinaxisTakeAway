import KinaxisList from "../../../shared/components/List/kinaxis-list"
import { getFavouriteList } from "../person-list/services/person-list.service"
import "../../../shared/styles/common.css"
export const FavList = () => {
   const favListPpl = getFavouriteList();
   return (
   <> 
   <section className="container">
   <KinaxisList people = {favListPpl}></KinaxisList>
   </section>
   </>
   )
}