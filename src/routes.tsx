import { RouteObject } from "react-router"
import {HomePage} from "../src/feature/components"
import { FavList } from "./feature/components/fav-list/fav-list"

export const routes: RouteObject[] = [
    {
        path : "/",
        element : <HomePage/>
    },
    {
        path : "/favourites",
        element : <FavList/>
    }
]