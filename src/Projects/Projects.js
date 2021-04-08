import style from "./Projects.module.css"
import styleContainer from "../common/styles/Container.module.css"
import {MyProject} from "./MyProject/MyProject";

export const Projects=()=>{
    return <div className={style.projectBlock}>
        <div className={`${styleContainer.container} ${style.projectContainer}`}>
<h2 className={style.title}>Projects</h2>
<div className={style.projects}>
<MyProject title={'Social Network'} discription={'use react redux rast api'}/>
<MyProject title={'Social Network'} discription={'use react redux rast api'}/>
<MyProject title={'Social Network'} discription={'use react redux rast api'}/>
<MyProject title={'Social Network'} discription={'use react redux rast api'}/>
<MyProject title={'Social Network'} discription={'use react redux rast api'}/>



</div>
        </div>
    </div>
}
