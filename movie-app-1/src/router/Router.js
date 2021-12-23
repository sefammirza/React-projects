import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from '../pages/Main';
import Register from '../pages/Register';
import Login from '../pages/Login';

const AppRouter = () => {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </Router>
    )
}

export default AppRouter;