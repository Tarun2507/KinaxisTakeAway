
import { fireEvent, render} from '@testing-library/react';
import  KinaxisList, { IProps } from './kinaxis-list';

const mockAddToFavFn = jest.fn();
const myProps: IProps = {
    people: [{
        text: "asdasd",
        year: 2020
    }],
    isFavButtonReq: true,
    addToFav: mockAddToFavFn
}
test("If the button has rendered correctly with props set", () => {
   const  {getAllByRole}   =  render(<KinaxisList {...myProps}/>)
   const pElement = getAllByRole("heading", {})[0];
   expect(pElement.innerHTML).toBe('asdasd');
   const favBtn = getAllByRole("button",{name: "Add to favourites"})[0];
   fireEvent.click(favBtn);
   expect(mockAddToFavFn).toHaveBeenCalled(); 
});
test("If button has rendered or not when isFavButton req set to false", () => {
    const  getAllByRole  =  render(<KinaxisList people = {myProps.people} isFavButtonReq = {false} addToFav = {mockAddToFavFn}/>)
    expect(getAllByRole.queryByRole('button')).toBeNull();
})


