import TopNav from 'components/TopNav';
import BottomNav from 'components/BottomNav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import ScrollToTop from 'components/ScrollToTop';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';
import Graduation from 'pages/Graduation';

export default function AppRouter(){
    return (
        <main className='container'>
            <Router>
                <TopNav />
                <Routes>
                    <Route path='/'>
                        <Route index element={<About />}/>
                        <Route path='graduation' element={<Graduation />}/>
                    </Route>
                    <Route path='*' element={<NotFound />}/>
                </Routes>
                <ScrollToTop />
                <BottomNav />
                <Footer />
            </Router>
        </main>
    );
}