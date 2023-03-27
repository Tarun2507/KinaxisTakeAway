
import { useRoutes } from "react-router-dom";
import './App.css';
import { routes as appRoutes } from './routes';
function App(props: any) {
    const routes = useRoutes(appRoutes);
    return routes;
}
export default App;
