import {ReactComponent as LogoJava} from 'assets/icons/java.svg';
import {ReactComponent as LogoHtml} from 'assets/icons/html.svg';
import {ReactComponent as LogoCss} from 'assets/icons/css.svg';
import {ReactComponent as LogoJavascript} from 'assets/icons/javascript.svg';
import {ReactComponent as LogoCsharp} from 'assets/icons/c#.svg';

interface Tool {
    key: number,
    toolId: number,
}

export default function TechTool({key, toolId} : Tool){
    return(
        <>
            {toolId === 1 ? <LogoJava width={'70px'} height={'70px'} /> : ''}
            {toolId === 2 ? <LogoHtml width={'70px'} height={'70px'} /> : ''}
            {toolId === 3 ? <LogoCss width={'70px'} height={'70px'} /> : ''}
            {toolId === 4 ? <LogoJavascript width={'70px'} height={'70px'} /> : ''}
            {toolId === 5 ? <LogoCsharp width={'70px'} height={'70px'} /> : ''}
        </>
    );
}