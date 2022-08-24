import style from './About.module.scss';
import Introduction from './Introduction';
import AboutContents from 'data/content.json';
import Content from './Content';

export default function About(){
    return (
        <>
            <Introduction />
            {AboutContents.map(content => (
                <section key={content.id} className={style.containerContent}>
                    <Content id={content.id} title={content.title} text={content.text} image={content.image} to={content.to} />
                </section>
            ))}
        </>
    );
}