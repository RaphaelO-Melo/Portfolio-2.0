import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';

export default function AppRouter(){
    return (
        <main className='container'>
            <Router>
                <Routes>
                    <Route path='/'>
                        <Route index element={<About />}/>
                    </Route>
                </Routes>
            </Router>
        </main>
    );
}