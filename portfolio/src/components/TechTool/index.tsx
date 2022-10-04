import {ReactComponent as LogoJava} from 'assets/icons/java.svg';
import {ReactComponent as LogoHtml} from 'assets/icons/html.svg';
import {ReactComponent as LogoCss} from 'assets/icons/css.svg';
import {ReactComponent as LogoJavascript} from 'assets/icons/javascript.svg';
import {ReactComponent as LogoCsharp} from 'assets/icons/c#.svg';

import style from './TechTool.module.scss';

interface Tool {
    key: number,
    toolId: number,
}

export default function TechTool({toolId} : Tool){
    return(
        <span className={style.icon}>
            {toolId === 1 ? <LogoJava width={'100%'} height={'100%'} /> : ''}
            {toolId === 2 ? <LogoHtml width={'100%'} height={'100%'} /> : ''}
            {toolId === 3 ? <LogoCss width={'100%'} height={'100%'} /> : ''}
            {toolId === 4 ? <LogoJavascript width={'100%'} height={'100%'} /> : ''}
            {toolId === 5 ? <LogoCsharp width={'100%'} height={'100%'} /> : ''}
        </span>
    );
}