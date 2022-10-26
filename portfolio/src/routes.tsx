import TopNav from 'components/TopNav';
import BottomNav from 'components/BottomNav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import ScrollToTop from 'components/ScrollToTop';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';
import Graduation from 'pages/Graduation';
import Project from 'pages/Project';
import { GraduationProvider } from 'common/context/Graduation';

export default function AppRouter(){
    return (
        <main className='container'>
            <Router>
                <TopNav />
                <GraduationProvider>
                    <Routes>
                        <Route path='/'>
                            <Route index element={<About />}/>
                            <Route path='graduation' element={<Graduation />}/>
                            <Route path='project/:id' element={<Project />}/>
                        </Route>
                        <Route path='*' element={<NotFound />}/>
                    </Routes>
                </GraduationProvider>
                <ScrollToTop />
                <BottomNav />
                <Footer />
            </Router>
        </main>
    );
}