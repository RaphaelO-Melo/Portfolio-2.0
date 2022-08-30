import style from './ScrollToTop.module.scss';
import { RiArrowUpSLine} from 'react-icons/ri';
import { useEffect, useState } from 'react';

export default function ScrollToTop(){

    const [showingButton, setShowingButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 350)
                setShowingButton(true);
            else
                setShowingButton(false);
        });
    }, []);

    function goToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className={style.wrapper}>
            {showingButton && (
                <RiArrowUpSLine 
                    className={style.wrapper__button} 
                    onClick={() => goToTop()}
                />
            )}
        </div>
    );
}