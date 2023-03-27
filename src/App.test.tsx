import { render } from "@testing-library/react"
import {BrowserRouter as Router} from "react-router-dom"
import App from "./App"

test('If the routes are returned correctly or not', () => {
    const appRoutes = render(<Router><App/></Router>)
    expect(appRoutes).toBeDefined();
})