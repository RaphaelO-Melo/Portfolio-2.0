import style from './ScrollToTop.module.scss';
import { RiArrowUpSLine} from 'react-icons/ri';

export default function ScrollToTop(){

    return (
        /*
        <div className="top-to-btm">
            <RiArrowUpCircleFill className="icon-position icon-style" />
        </div>
        */
        <div className={style.wrapper}>
            <RiArrowUpSLine className={style.wrapper__button} />
        </div>
    );
}