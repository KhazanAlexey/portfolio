import style from "./Skill.module.css"

export const Skill = (props) => {
    return <div className={style.skill}>
        <div className={style.icon}> icon</div>
        <h3>{props.title}</h3>
        <span className={style.discription}>disription {props.discription}</span>
    </div>
}
