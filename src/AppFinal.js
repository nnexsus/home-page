import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import CookieSet from './components/router/cookieset';

const SiteRouter = () => {

    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<App/>}/>
                    <Route path='/setcookie/:id' element={<CookieSet/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default SiteRouter;