import style from "./Skills.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";
import {Title} from "../common/Copmonents/title/Title";
import jsimg from "../assets/img/js.png"
import cssimg from "../assets/img/css.png"
import reactimg from "../assets/img/react.png"
import htmlimg from "../assets/img/html.png"
import sassimg from "../assets/img/sass.png"
import reduximg from "../assets/img/redux.png"
import storybookimg from "../assets/img/storybook.png"
import tsimg from "../assets/img/ts.svg"
import axiosimg from "../assets/img/axois.png"
import gitimg from "../assets/img/git.png"
import materialimg from "../assets/img/material.png"

export const Skills = () => {
    const js = {
        backgroundImage: 'url(' + jsimg + ')',
    };
    const css = {
        backgroundImage: 'url(' + cssimg + ')',

    };
    const react = {
        backgroundImage: 'url(' + reactimg + ')',
    };
    const html = {
        backgroundImage: 'url(' + htmlimg + ')',
    };
    const sass = {
        backgroundImage: 'url(' + sassimg + ')',
    };
    const redux = {
        backgroundImage: 'url(' + reduximg + ')',
    };
    const storybook = {
        backgroundImage: 'url(' + storybookimg + ')',
    };
    const ts = {
        backgroundImage: 'url(' + tsimg + ')',
    };
    const axios = {
        backgroundImage: 'url(' + axiosimg + ')',
    };
    const git = {
        backgroundImage: 'url(' + gitimg + ')',
    };
    const material = {
        backgroundImage: 'url(' + materialimg + ')',
    };


    return <div className={style.skillsBlock}>
        <div className={`${styleContainer.container} ${style.skillsContainer}`}>
            <Title title={"Skills"}/>
            <div className={style.skills}>
                <Skill style={js} title={'JS'} discription={'oin skills'}/>
                <Skill style={css} title={'CSS'} discription={'props discriptoin skills'}/>
                <Skill style={react} title={'React'} discription={'props sss g g g g  skills'}/>
                <Skill style={html} title={'HTML'} discription={'props sss g g g g  skills'}/>
                <Skill style={sass} title={'SASS'} discription={'props sss g g g g  skills'}/>
                <Skill style={redux} title={'Redux'} discription={'props sss g g g g  skills'}/>
                <Skill style={storybook} title={'StoryBook'} discription={'props sss g g g g  skills'}/>
                <Skill style={ts} title={'TypeScript'} discription={'props sss g g g g  skills'}/>
                <Skill style={axios} title={'Axios'} discription={'props sss g g g g  skills'}/>
                <Skill style={git} title={'Git'} discription={'props sss g g g g  skills'}/>
                <Skill style={material} title={'Material-UI'} discription={'props sss g g g g  skills'}/>


            </div>
        </div>
    </div>
}
