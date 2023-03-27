import { render } from '@testing-library/react';
import { FavList } from "./fav-list";
import {BrowserRouter as Router} from "react-router-dom"
test('Check whether session storage is set or not', () => {
    var storage = sessionStorage;
    storage.setItem('favList', JSON.stringify([{
        text: "asdasd",
        year: 2020
    }]))
    const  { getAllByRole } = render(<Router><FavList/></Router>)
    const pElement = getAllByRole("heading", {})[0];
    expect(pElement.innerHTML).toBe('asdasd');
})