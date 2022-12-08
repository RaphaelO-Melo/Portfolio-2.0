import {ReactComponent as LogoJava} from 'assets/icons/java.svg';
import {ReactComponent as LogoHtml} from 'assets/icons/html.svg';
import {ReactComponent as LogoCss} from 'assets/icons/css.svg';
import {ReactComponent as LogoJavascript} from 'assets/icons/javascript.svg';
import {ReactComponent as LogoCsharp} from 'assets/icons/c#.svg';
import {ReactComponent as LogoUnity} from 'assets/icons/unity.svg';
import {ReactComponent as LogoBootstrap} from 'assets/icons/bootstrap.svg';
import {ReactComponent as LogoReact} from 'assets/icons/react.svg';
import {ReactComponent as LogoSass} from 'assets/icons/sass.svg';
import {ReactComponent as LogoTypescript} from 'assets/icons/typescript.svg';
import {ReactComponent as LogoJQuery} from 'assets/icons/jquery.svg';
import {ReactComponent as LogoMySQL} from 'assets/icons/mysql.svg';
import {ReactComponent as LogoMongoDB} from 'assets/icons/mongodb.svg';

import style from './TechToolMin.module.scss';

interface Tool {
    key: number,
    toolId: number,
}

export default function TechToolMin({toolId} : Tool){
    return(
        <span className={style.icon}>
            {toolId === 1 ? <LogoJava width={'100%'} height={'100%'} /> : ''}
            {toolId === 2 ? <LogoHtml width={'100%'} height={'100%'} /> : ''}
            {toolId === 3 ? <LogoCss width={'100%'} height={'100%'} /> : ''}
            {toolId === 4 ? <LogoJavascript width={'100%'} height={'100%'} /> : ''}
            {toolId === 5 ? <LogoCsharp width={'100%'} height={'100%'} /> : ''}
            {toolId === 6 ? <LogoUnity width={'100%'} height={'100%'} /> : ''}
            {toolId === 7 ? <LogoBootstrap width={'100%'} height={'100%'} /> : ''}
            {toolId === 8 ? <LogoReact width={'100%'} height={'100%'} /> : ''}
            {toolId === 9 ? <LogoTypescript width={'100%'} height={'100%'} /> : ''}
            {toolId === 10 ? <LogoSass width={'100%'} height={'100%'} /> : ''}
            {toolId === 11 ? <LogoJQuery width={'100%'} height={'100%'} /> : ''}
            {toolId === 12 ? <LogoMySQL width={'100%'} height={'100%'} /> : ''}
            {toolId === 13 ? <LogoMongoDB width={'100%'} height={'100%'} /> : ''}
        </span>
    );
}