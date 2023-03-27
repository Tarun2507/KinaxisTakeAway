import { IBirth } from "../../../interfaces/home-page-interfaces";

export const saveToFavourites = (favList: IBirth[]) => {
    sessionStorage.setItem("favList", JSON.stringify(favList));
}
export function getFavouriteList(): IBirth[]{
    const parsedValue = sessionStorage.getItem('favList');
    return  parsedValue != null ? JSON.parse(parsedValue) : []
}