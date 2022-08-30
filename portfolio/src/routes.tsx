import TopNav from 'components/TopNav';
import BottomNav from 'components/BottomNav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import ScrollToTop from 'components/ScrollToTop';

export default function AppRouter(){
    return (
        <main className='container'>
            <Router>
                <TopNav />
                <Routes>
                    <Route path='/'>
                        <Route index element={<About />}/>
                    </Route>
                </Routes>
                <ScrollToTop />
                <BottomNav />
            </Router>
        </main>
    );
}