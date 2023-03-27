
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import dayjs from 'dayjs';
import  {HomePage} from '../../components';
import AxiosInstance from '../../../../src/core/services/error-interceptor'
import {BrowserRouter as Router} from "react-router-dom"
test("If the button has rendered correctly with props set", () => {
   const getAllByRole = render(<Router><HomePage/></Router>)
   const selectedButton = getAllByRole.queryByText(dayjs(new Date()).date().toString());
   expect(selectedButton?.getAttribute('aria-selected')).toBe("true"); 
});
test('axios spy and rendering test', async () => {
    const spyAxios = jest.spyOn(AxiosInstance, 'get').mockResolvedValue({
        data: {
            births : [{
               text : 'asd',
               year : 2009 
            }]
        }
    });
    const getByRole = render(<Router><HomePage/></Router>);
    await waitFor(() => {
        expect(getByRole.queryAllByText('asd')[0]).toBeInTheDocument();
    });
    const month = dayjs(new Date()).month() + 1;
    const date = dayjs(new Date()).date();
    expect(spyAxios).toHaveBeenCalledWith(`/onthisday/births/${month}/${date}`);
});


