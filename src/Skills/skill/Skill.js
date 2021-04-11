import style from "./Skill.module.scss"

export const Skill = (props) => {
    return <div className={style.skill}>
        <div style={props.style} className={style.icon}>
            </div>
        <h3>{props.title}</h3>
        <span className={style.discription}> {props.discription}</span>
    </div>
}
