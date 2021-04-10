import style from "./Projects.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import {MyProject} from "./MyProject/MyProject";
import {Title} from "../common/Copmonents/title/Title";
import socialimg from "../assets/img/logo-vkontakte-social-social-network-vk-network-icon.svg"
import todolistimg from "../assets/img/todo-list-icon-17.jpg"
export const Projects = () => {
    const social = {
        backgroundImage: 'url(' + socialimg + ')'
    };
    const todolist = {
        backgroundImage: 'url(' + todolistimg + ')'
    };


    return <div className={style.projectBlock}>
        <div className={`${styleContainer.container} ${style.projectContainer}`}>
            <Title title={"Projects"}/>

            <div className={style.projects}>
                <MyProject style={social} title={'Social Network'} discription={'use react redux rast api'}/>
                <MyProject style={todolist} title={'To do list'} discription={'use react redux rast api'}/>
                <MyProject title={'Social Network'} discription={'use react redux rast api'}/>
                <MyProject title={'Social Network'} discription={'use react redux rast api'}/>
                <MyProject title={'Social Network'} discription={'use react redux rast api'}/>


            </div>
        </div>
    </div>
}
