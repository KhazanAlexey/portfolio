import style from "./Skills.module.css"
import styleContainer from "../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";
import {Title} from "../common/Copmonents/title/Title";

export const Skills=()=>{
    return <div className={style.skillsBlock}>
        <div className={`${styleContainer.container} ${style.skillsContainer}`}>
            <Title title={"Skills"}/>
<div className={style.skills}>
<Skill title={'JS'} discription={'prop w    q q q qq q q q q q q q q q q q    w w w w w w w w w w w w w w w w  w    w w w w w w w w w w w w w w w w w w w w w w w w w w s dwwwwiscriptoin skills'}/>
<Skill title={'CSS'} discription={'props discriptoin skills'}/>
<Skill title={'React'} discription={'props sss g g g g  skills'}/>
<Skill title={'React'} discription={'props sss g g g g  skills'}/>
<Skill title={'React'} discription={'props sss g g g g  skills'}/>
<Skill title={'React'} discription={'props sss g g g g  skills'}/>
<Skill title={'React'} discription={'props sss g g g g  skills'}/>
<Skill title={'React'} discription={'props sss g g g g  skills'}/>
<Skill title={'React'} discription={'props sss g g g g  skills'}/>
<Skill title={'React'} discription={'props sss g g g g  skills'}/>
<Skill title={'React'} discription={'props sss g g g g  skills'}/>
<Skill title={'React'} discription={'props sss g g g g  skills'}/>



</div>
        </div>
    </div>
}
