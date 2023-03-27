
import { fireEvent, render} from '@testing-library/react';
import  KinaxisCalendar, { IDateProps } from './kinaxis-calendar';
import dayjs from 'dayjs';

const mockSetDateValueFn = jest.fn();
const myProps: IDateProps = {
    dateValue : dayjs(new Date()),
    setDateValue : mockSetDateValueFn
}
test("If the button has rendered correctly with props set", () => {
   const  getAllByRole   =  render(<KinaxisCalendar {...myProps}/>)
   const selectedButton = getAllByRole.queryByText(myProps.dateValue.date().toString());
   expect(selectedButton?.getAttribute('aria-selected')).toBe("true"); 
});

test("If the calendar date button has clicked , change function is called or not", () => {
   const  getAllByRole   =  render(<KinaxisCalendar {...myProps}/>)
   const selectedButton = getAllByRole.queryByText(myProps.dateValue.date().toString()) || new HTMLElement;
   fireEvent.click(selectedButton);
   expect(mockSetDateValueFn).toHaveBeenCalled();
})
